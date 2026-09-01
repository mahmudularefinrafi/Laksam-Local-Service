# Database Design

The production database should use PostgreSQL.

## profiles
- id (uuid, pk)
- auth_user_id (uuid, unique)
- role (customer | provider | admin)
- full_name
- phone
- avatar_url
- status (active | blocked)
- created_at
- updated_at

## provider_profiles
- id (uuid, pk)
- profile_id (uuid, fk profiles)
- bio
- experience_years
- starting_price
- whatsapp
- address
- verified (boolean)
- verification_status (pending | approved | rejected)
- availability_status (available | busy | offline)
- rating_average
- review_count
- created_at
- updated_at

## categories
- id (uuid, pk)
- name
- slug
- icon
- is_active
- sort_order

## services
- id (uuid, pk)
- category_id (uuid, fk categories)
- name
- slug
- description
- is_active

## areas
- id (uuid, pk)
- name
- slug
- is_active

## provider_services
- provider_id (uuid, fk provider_profiles)
- service_id (uuid, fk services)
- price_from
- price_to
- years_experience
- primary key (provider_id, service_id)

## provider_areas
- provider_id (uuid, fk provider_profiles)
- area_id (uuid, fk areas)
- primary key (provider_id, area_id)

## bookings
- id (uuid, pk)
- customer_id (uuid, fk profiles)
- provider_id (uuid, fk provider_profiles)
- service_id (uuid, fk services)
- area_id (uuid, fk areas)
- customer_address
- problem_description
- requested_date
- requested_time
- estimated_price
- status (pending | accepted | rejected | in_progress | completed | cancelled)
- created_at
- updated_at

## booking_status_history
- id (uuid, pk)
- booking_id (uuid, fk bookings)
- status
- changed_by (uuid, fk profiles)
- note
- created_at

## reviews
- id (uuid, pk)
- booking_id (uuid, unique fk bookings)
- customer_id (uuid, fk profiles)
- provider_id (uuid, fk provider_profiles)
- rating (1-5)
- comment
- is_visible
- created_at

## verification_requests
- id (uuid, pk)
- provider_id (uuid, fk provider_profiles)
- document_url
- note
- status (pending | approved | rejected)
- reviewed_by (uuid, fk profiles)
- reviewed_at
- created_at

## reports
- id (uuid, pk)
- reporter_id (uuid, fk profiles)
- provider_id (uuid, nullable fk provider_profiles)
- booking_id (uuid, nullable fk bookings)
- review_id (uuid, nullable fk reviews)
- reason
- description
- status (open | investigating | resolved | dismissed)
- admin_note
- created_at
- updated_at

## notifications
- id (uuid, pk)
- user_id (uuid, fk profiles)
- type
- title
- message
- read_at
- created_at
