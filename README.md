# Goodweeks_BE
hotel management

---

## API Documentation

### Base URL
http://localhost:8888/api
```

---

## Hotel APIs

### 1. Search Hotels
- **URL:** `/api/hotels/search`
- **Method:** `GET`
- **Query Parameters:**
  - `city` (string, required): City to search hotels in
  - `check_in` (string, required, YYYY-MM-DD): Check-in date
  - `check_out` (string, required, YYYY-MM-DD): Check-out date
- **Response:**
  - `success` (boolean)
  - `data` (array of hotels with calculated final price)
  - Returns hotel details and price with markup for the requested city/date range

#### Example Request
```
GET /api/hotels/search?city=Delhi&check_in=2025-12-01&check_out=2025-12-10
```

---

## Markup APIs

### 1. Create Markup
- **URL:** `/api/markups/createMarkup`
- **Method:** `POST`
- **Request Body:**
  - `city` (string): City name
  - `markup` (float): Markup percentage (e.g., 10 for 10%)
- **Response:**
  - `success` (boolean)
  - `data` (markup object)

### 2. Show All Markups
- **URL:** `/api/markups/showMarkups`
- **Method:** `GET`
- **Response:**
  - `success` (boolean)
  - `data` (array of markups)

### 3. Update Markup
- **URL:** `/api/markups/updateMarkup/:id`
- **Method:** `PUT`
- **URL Parameter:**
  - `id` (integer): Markup ID
- **Request Body:**
  - `city` (string): City name (optional if only markup is updated)
  - `markup` (float): Markup percentage
- **Response:**
  - `success` (boolean)
  - `message`: Update status

### 4. Remove Markup
- **URL:** `/api/markups/removeMarkup/:id`
- **Method:** `DELETE`
- **URL Parameter:**
  - `id` (integer): Markup ID
- **Response:**
  - `success` (boolean)
  - `message`: Deletion status

---

### Notes
- All endpoints return JSON responses.
- The hotel search result applies a city-specific markup, defaulting to 5% if not set.
- Ensure request body and parameters are valid as per above descriptions.
