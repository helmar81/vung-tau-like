
# Firestore Data Schema

## Collection: `categories`
- `id`: string (e.g., "restaurant")
- `icon`: string (FontAwesome class)
- `label`: map
  - `en`: string
  - `vi`: string
- `order`: number

## Collection: `places`
- `id`: string
- `name`: string
- `category`: string (foreign key to categories.id)
- `description`: map
  - `en`: string
  - `vi`: string
- `address`: string
- `image`: string (URL)
- `rating`: number
- `coordinates`: geopoint
- `featured`: boolean
- `tags`: array[string]
- `metadata`: map
  - `opening_hours`: string
  - `contact`: string

## Collection: `users`
- `uid`: string
- `email`: string
- `displayName`: string
- `photoURL`: string
- `favorites`: array[string] (place IDs)
- `languagePreference`: string ("en" | "vi")
