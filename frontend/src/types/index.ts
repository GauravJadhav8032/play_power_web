// ─── Listing Types ─────────────────────────────────────────────────────────

export interface Host {
  id: string;
  name: string;
  avatar: string;
  isSuperhost: boolean;
  yearsHosting: number;
  responseRate: number;
  responseTime: string;
}

export interface HighlightItem {
  icon: string;
  title: string;
  description: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Price {
  perNight: number;
  currency: string;
  cleaningFee: number;
  serviceFee: number;
  taxes: number;
}

export interface Listing {
  id: string;
  title: string;
  type: string;
  location: string;
  guests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  rating: number;
  reviewCount: number;
  isFavorite: boolean;
  isGuestFavorite: boolean;
  description: string;
  host: Host;
  price: Price;
  highlights: HighlightItem[];
  coordinates: Coordinates;
}

// ─── Photo Types ────────────────────────────────────────────────────────────

export interface Photo {
  id: string;
  url: string;
  caption: string;
  alt: string;
  category: string;
}

export interface PhotosResponse {
  data: Photo[];
  total: number;
}

// ─── Review Types ───────────────────────────────────────────────────────────

export interface ReviewCategory {
  name: string;
  rating: number;
}

export interface Review {
  id: string;
  author: string;
  avatar: string;
  date: string;
  rating: number;
  text: string;
  location: string;
}

export interface ReviewsData {
  overallRating: number;
  totalCount: number;
  categories: ReviewCategory[];
  reviews: Review[];
}

// ─── Amenity Types ──────────────────────────────────────────────────────────

export interface AmenityItem {
  icon: string;
  name: string;
}

export interface AmenityCategory {
  category: string;
  items: AmenityItem[];
}

// ─── Booking Types ──────────────────────────────────────────────────────────

export interface BookingData {
  pricePerNight: number;
  currency: string;
  cleaningFee: number;
  serviceFee: number;
  taxes: number;
  minNights: number;
  maxNights: number;
  checkInTime: string;
  checkOutTime: string;
}

// ─── API Response Wrappers ──────────────────────────────────────────────────

export interface ApiResponse<T> {
  data: T;
}
