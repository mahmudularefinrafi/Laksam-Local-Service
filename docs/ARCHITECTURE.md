# Laksam Local Service Architecture

## Roles
- Customer: browse services, view providers, create bookings, review completed bookings.
- Provider: maintain profile, services, availability and booking status.
- Admin: approve providers, manage categories/services/areas, inspect users/bookings/reviews/reports.

## Core entities
- profiles
- provider_profiles
- categories
- services
- areas
- provider_services
- provider_areas
- bookings
- booking_status_history
- reviews
- verification_requests
- reports
- notifications

## Booking lifecycle
pending -> accepted -> in_progress -> completed
Alternative terminal states: cancelled, rejected

## Trust rules
1. Provider is publicly marked Verified only after admin approval.
2. Only a customer attached to a completed booking can create a review for that provider.
3. Admin can suspend providers or hide abusive reviews.

## MVP priorities
1. Provider directory
2. Search/filter by service and area
3. Provider profiles
4. Booking requests
5. Provider onboarding
6. Admin panel
7. Reviews
8. Reports

## Later phases
- Online payments
- Maps and distance sorting
- Live availability
- Notifications/SMS
- Provider subscriptions
- Mobile apps
