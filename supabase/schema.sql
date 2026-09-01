-- Laksam Local Service — PostgreSQL / Supabase schema
-- Run this in Supabase SQL Editor after creating a project.

create extension if not exists pgcrypto;

create type user_role as enum ('customer','provider','admin');
create type user_status as enum ('active','blocked');
create type verification_status as enum ('pending','approved','rejected');
create type availability_status as enum ('available','busy','offline');
create type booking_status as enum ('pending','accepted','rejected','in_progress','completed','cancelled');
create type report_status as enum ('open','investigating','resolved','dismissed');

create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  role user_role not null default 'customer',
  full_name text not null default '',
  phone text,
  avatar_url text,
  status user_status not null default 'active',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists provider_profiles (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null unique references profiles(id) on delete cascade,
  bio text,
  experience_years integer not null default 0 check (experience_years >= 0),
  starting_price numeric(12,2),
  whatsapp text,
  address text,
  verified boolean not null default false,
  verification_status verification_status not null default 'pending',
  availability_status availability_status not null default 'offline',
  rating_average numeric(3,2) not null default 0 check (rating_average between 0 and 5),
  review_count integer not null default 0 check (review_count >= 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists categories (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  slug text not null unique,
  icon text,
  is_active boolean not null default true,
  sort_order integer not null default 0
);

create table if not exists services (
  id uuid primary key default gen_random_uuid(),
  category_id uuid not null references categories(id) on delete cascade,
  name text not null,
  slug text not null unique,
  description text,
  is_active boolean not null default true
);

create table if not exists areas (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  slug text not null unique,
  is_active boolean not null default true
);

create table if not exists provider_services (
  provider_id uuid not null references provider_profiles(id) on delete cascade,
  service_id uuid not null references services(id) on delete cascade,
  price_from numeric(12,2),
  price_to numeric(12,2),
  years_experience integer not null default 0,
  primary key (provider_id, service_id),
  check (price_from is null or price_from >= 0),
  check (price_to is null or price_to >= 0),
  check (price_to is null or price_from is null or price_to >= price_from)
);

create table if not exists provider_areas (
  provider_id uuid not null references provider_profiles(id) on delete cascade,
  area_id uuid not null references areas(id) on delete cascade,
  primary key (provider_id, area_id)
);

create table if not exists bookings (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid not null references profiles(id),
  provider_id uuid not null references provider_profiles(id),
  service_id uuid not null references services(id),
  area_id uuid references areas(id),
  customer_address text not null,
  problem_description text,
  requested_date date not null,
  requested_time time not null,
  estimated_price numeric(12,2),
  status booking_status not null default 'pending',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists booking_status_history (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid not null references bookings(id) on delete cascade,
  status booking_status not null,
  changed_by uuid references profiles(id),
  note text,
  created_at timestamptz not null default now()
);

create table if not exists reviews (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid not null unique references bookings(id) on delete cascade,
  customer_id uuid not null references profiles(id),
  provider_id uuid not null references provider_profiles(id),
  rating integer not null check (rating between 1 and 5),
  comment text,
  is_visible boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists verification_requests (
  id uuid primary key default gen_random_uuid(),
  provider_id uuid not null references provider_profiles(id) on delete cascade,
  document_url text,
  note text,
  status verification_status not null default 'pending',
  reviewed_by uuid references profiles(id),
  reviewed_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists reports (
  id uuid primary key default gen_random_uuid(),
  reporter_id uuid not null references profiles(id),
  provider_id uuid references provider_profiles(id),
  booking_id uuid references bookings(id),
  review_id uuid references reviews(id),
  reason text not null,
  description text,
  status report_status not null default 'open',
  admin_note text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references profiles(id) on delete cascade,
  type text not null,
  title text not null,
  message text not null,
  read_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists idx_provider_profiles_status on provider_profiles(verification_status, availability_status);
create index if not exists idx_services_category on services(category_id, is_active);
create index if not exists idx_bookings_customer on bookings(customer_id, created_at desc);
create index if not exists idx_bookings_provider on bookings(provider_id, created_at desc);
create index if not exists idx_bookings_status on bookings(status);
create index if not exists idx_reviews_provider on reviews(provider_id, created_at desc);
create index if not exists idx_reports_status on reports(status, created_at desc);
create index if not exists idx_notifications_user on notifications(user_id, created_at desc);

-- Keep updated_at current on mutable tables.
create or replace function set_updated_at() returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end; $$;

drop trigger if exists profiles_updated_at on profiles;
create trigger profiles_updated_at before update on profiles for each row execute function set_updated_at();
drop trigger if exists provider_profiles_updated_at on provider_profiles;
create trigger provider_profiles_updated_at before update on provider_profiles for each row execute function set_updated_at();
drop trigger if exists bookings_updated_at on bookings;
create trigger bookings_updated_at before update on bookings for each row execute function set_updated_at();
drop trigger if exists reports_updated_at on reports;
create trigger reports_updated_at before update on reports for each row execute function set_updated_at();

-- New auth users get a customer profile automatically.
create or replace function handle_new_user() returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, full_name, phone)
  values (new.id, coalesce(new.raw_user_meta_data->>'full_name',''), new.phone)
  on conflict (id) do nothing;
  return new;
end; $$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users for each row execute function handle_new_user();

-- Basic RLS: users can read/update their own profile; public users can discover approved providers/services.
alter table profiles enable row level security;
alter table provider_profiles enable row level security;
alter table categories enable row level security;
alter table services enable row level security;
alter table areas enable row level security;
alter table provider_services enable row level security;
alter table provider_areas enable row level security;
alter table bookings enable row level security;
alter table booking_status_history enable row level security;
alter table reviews enable row level security;
alter table verification_requests enable row level security;
alter table reports enable row level security;
alter table notifications enable row level security;

create policy "public can view approved providers" on provider_profiles for select using (verification_status = 'approved');
create policy "public can view active categories" on categories for select using (is_active = true);
create policy "public can view active services" on services for select using (is_active = true);
create policy "public can view active areas" on areas for select using (is_active = true);
create policy "public can view provider services" on provider_services for select using (exists (select 1 from provider_profiles p where p.id = provider_id and p.verification_status = 'approved'));
create policy "public can view provider areas" on provider_areas for select using (exists (select 1 from provider_profiles p where p.id = provider_id and p.verification_status = 'approved'));
create policy "public can view visible reviews" on reviews for select using (is_visible = true);

create policy "users view own profile" on profiles for select to authenticated using (id = auth.uid());
create policy "users update own profile" on profiles for update to authenticated using (id = auth.uid()) with check (id = auth.uid());
create policy "users view own bookings" on bookings for select to authenticated using (customer_id = auth.uid());
create policy "users create bookings" on bookings for insert to authenticated with check (customer_id = auth.uid());
create policy "users view own notifications" on notifications for select to authenticated using (user_id = auth.uid());
create policy "users mark own notifications" on notifications for update to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid());
