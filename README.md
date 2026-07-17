# Airbnb Listing Page Clone

A pixel-perfect desktop clone of the Airbnb listing page for "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10".

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 19, Vite, TypeScript, Tailwind CSS v3 |
| Routing | React Router v6 |
| Animations | Framer Motion |
| Icons | Lucide React |
| HTTP | Axios |
| Backend | Node.js, Express, TypeScript |
| Dev | ts-node-dev |

## Features

### 3 Complete Views
1. **Listing Page** (`/`) — Full listing with sticky header, 5-photo grid, 2-column layout, sticky booking card
2. **Photo Tour** (`/photos`) — Fullscreen gallery with photos grouped by category
3. **Lightbox** — Image viewer with prev/next, thumbnail strip, and keyboard navigation

### Accessibility
- Full keyboard navigation (ESC, ←, → in lightbox)
- Focus trap in modals and overlays
- Scroll lock when overlays are open
- ARIA roles and labels throughout
- Semantic HTML5 structure

### Backend API
- `GET /api/listing` — Listing data
- `GET /api/photos` — Photo gallery
- `GET /api/reviews` — Reviews + ratings
- `GET /api/amenities` — Categorized amenities
- `GET /api/booking` — Booking/pricing data

## Project Structure

```
Play_Power/
├── frontend/              # React + Vite client
│   ├── src/
│   │   ├── api/           # Axios API client
│   │   ├── components/
│   │   │   ├── gallery/   # PhotoTour, Lightbox
│   │   │   ├── layout/    # Header, Footer
│   │   │   ├── listing/   # All listing sections
│   │   │   └── ui/        # Modal, StarRating, Button
│   │   ├── hooks/         # useFocusTrap, useScrollLock, useKeyboard
│   │   ├── pages/         # ListingPage, PhotosPage
│   │   └── types/         # TypeScript interfaces
│   ├── tailwind.config.ts
│   └── vite.config.ts
└── server/                # Express backend
    └── src/
        ├── data/          # Mock JSON data
        ├── routes/        # API route handlers
        └── index.ts       # Server entry point
```

## Setup & Running

### Prerequisites
- Node.js 18+ (LTS)
- npm 9+

### 1. Start the Backend

```bash
cd server
npm install
npm run dev
```

The API server starts on **http://localhost:5000**

### 2. Start the Frontend

```bash
cd frontend
npm install
npm run dev
```

The app starts on **http://localhost:5173**

> The Vite dev server is configured to proxy `/api` requests to the backend automatically.

### One-Command Setup (from root)

```bash
# Terminal 1 - Backend
cd server && npm install && npm run dev

# Terminal 2 - Frontend  
cd frontend && npm install && npm run dev
```

## Keyboard Navigation

| Key | Action |
|-----|--------|
| `→` Arrow Right | Next photo (Lightbox) |
| `←` Arrow Left | Previous photo (Lightbox) |
| `ESC` | Close Lightbox / Modal |
| `Tab` / `Shift+Tab` | Navigate within focus-trapped overlays |

## Design Tokens

| Token | Value |
|-------|-------|
| Primary Red | `#FF385C` |
| Dark Red | `#E31C5F` |
| Text Primary | `#222222` |
| Text Secondary | `#717171` |
| Border | `#DDDDDD` |
| Background | `#FFFFFF` |
| Hover | `#F7F7F7` |

## Component Architecture

```
ListingPage
├── Header (sticky)
├── ListingTitle (Share, Save)
├── PhotoGrid (5-photo layout)
├── HostInfo
├── GuestFavorite (badge + rating)
├── PropertyHighlights
├── AboutSpace (expandable)
├── AmenitiesSection + Modal
├── CalendarSection (dual-month)
├── ReviewsSection + Modal
├── LocationSection (OpenStreetMap)
├── BookingCard (sticky)
└── Footer

PhotosPage (/photos)
└── PhotoTour
    ├── Grouped photo list
    └── Lightbox (on click)
        ├── Prev/Next buttons
        ├── Keyboard navigation
        ├── Thumbnail strip
        └── Caption
```

## License

This project is for educational/portfolio purposes only. All Airbnb brand assets, designs, and trademarks are property of Airbnb, Inc.
