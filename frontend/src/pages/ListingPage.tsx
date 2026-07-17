import React, { useState, useEffect, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "lucide-react";
import type { Listing, Photo, ReviewsData, AmenityCategory, BookingData } from "../types";
import { getListing, getPhotos, getReviews, getAmenities, getBooking } from "../api";

// Layout
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

// Listing sections
import PhotoGrid from "../components/listing/PhotoGrid";
import ListingTitle from "../components/listing/ListingTitle";
import GuestFavorite from "../components/listing/GuestFavorite";
import HostInfo from "../components/listing/HostInfo";
import PropertyHighlights from "../components/listing/PropertyHighlights";
import AboutSpace from "../components/listing/AboutSpace";
import AmenitiesSection from "../components/listing/AmenitiesSection";
import CalendarSection from "../components/listing/CalendarSection";
import ReviewsSection from "../components/listing/ReviewsSection";
import LocationSection from "../components/listing/LocationSection";
import BookingCard from "../components/listing/BookingCard";

// Gallery
const Lightbox = lazy(() => import("../components/gallery/Lightbox"));

const Divider: React.FC = () => (
  <hr className="border-0 border-t border-airbnb-border my-10" />
);

const ListingPage: React.FC = () => {
  const navigate = useNavigate();

  const [listing, setListing] = useState<Listing | null>(null);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [reviews, setReviews] = useState<ReviewsData | null>(null);
  const [amenities, setAmenities] = useState<AmenityCategory[]>([]);
  const [booking, setBooking] = useState<BookingData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [listingData, photosData, reviewsData, amenitiesData, bookingData] =
          await Promise.all([
            getListing(),
            getPhotos(),
            getReviews(),
            getAmenities(),
            getBooking(),
          ]);

        setListing(listingData);
        setPhotos(photosData.data);
        setReviews(reviewsData);
        setAmenities(amenitiesData);
        setBooking(bookingData);
      } catch (err) {
        console.error("Failed to fetch listing data:", err);
        setError("Failed to load listing. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-airbnb-red border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-airbnb-secondary">Loading listing...</p>
        </div>
      </div>
    );
  }

  if (error || !listing || !reviews || !booking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 font-semibold">{error || "Something went wrong"}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-6 py-2 bg-airbnb-red text-white rounded-lg hover:bg-airbnb-dark"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-[1120px] mx-auto w-full px-10 pb-10">
        {/* Title + actions */}
        <ListingTitle
          title={listing.title}
          isFavorite={isFavorite}
          onToggleFavorite={() => setIsFavorite(!isFavorite)}
        />

        {/* 5-photo grid */}
        <PhotoGrid
          photos={photos}
          onPhotoClick={(index) => setLightboxIndex(index)}
        />

        {/* Main 2-col layout */}
        <div className="mt-10 grid grid-cols-[1fr_380px] gap-20 items-start">
          {/* Left column */}
          <div>
            {/* Host info */}
            <HostInfo listing={listing} />

            <Divider />

            {/* Guest Favourite */}
            <GuestFavorite listing={listing} />

            <Divider />

            {/* Highlights */}
            <PropertyHighlights highlights={listing.highlights} />

            <Divider />

            {/* About */}
            <AboutSpace
              description={listing.description}
              hostName={listing.host.name}
            />

            <Divider />

            {/* Bedrooms placeholder */}
            <div>
              <h2 className="text-2xl font-semibold text-airbnb-text mb-6">
                Where you'll sleep
              </h2>
              <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 -mb-4">
                <div className="w-[320px] shrink-0">
                  <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-4">
                    <img 
                      src={photos[2]?.url || "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=85"} 
                      alt="Bedroom"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <h3 className="font-semibold text-airbnb-text text-base">Bedroom</h3>
                  <p className="text-sm text-airbnb-secondary mt-1">1 double bed</p>
                </div>
                <div className="w-[320px] shrink-0">
                  <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-4">
                    <img 
                      src={photos[3]?.url || "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=85"} 
                      alt="Living room"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <h3 className="font-semibold text-airbnb-text text-base">Living room</h3>
                  <p className="text-sm text-airbnb-secondary mt-1">1 sofa</p>
                </div>
              </div>
            </div>

            <Divider />

            {/* Amenities */}
            <AmenitiesSection amenities={amenities} />

            <Divider />

            {/* Calendar */}
            <CalendarSection
              minNights={booking.minNights}
              checkInTime={booking.checkInTime}
              checkOutTime={booking.checkOutTime}
            />

            <Divider />
          </div>

          {/* Right column — sticky booking card */}
          <div className="booking-card-wrapper">
            <BookingCard listing={listing} booking={booking} />
          </div>
        </div>

        {/* Reviews */}
        <ReviewsSection reviewsData={reviews} />

        <Divider />

        {/* Location */}
        <LocationSection
          coordinates={listing.coordinates}
          location={listing.location}
        />

        <Divider />

        {/* Host profile */}
        <div className="flex items-start gap-6">
          <div className="w-16 h-16 rounded-full overflow-hidden bg-airbnb-secondary flex-shrink-0 flex items-center justify-center">
            <User size={36} className="text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-airbnb-text">
              Hosted by {listing.host.name}
            </h2>
            <p className="text-sm text-airbnb-secondary mt-1">
              {listing.host.yearsHosting} year{listing.host.yearsHosting !== 1 ? "s" : ""} hosting
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-airbnb-text">
              <span>⭐ {listing.rating.toFixed(2)} rating</span>
              <span>· {listing.reviewCount} reviews</span>
              {listing.host.isSuperhost && <span>· 🏆 Superhost</span>}
            </div>
            <div className="mt-4 text-sm text-airbnb-secondary space-y-1">
              <p>Response rate: {listing.host.responseRate}%</p>
              <p>Response time: {listing.host.responseTime}</p>
            </div>
            <button className="mt-6 px-6 py-3 border border-airbnb-text rounded-lg text-base font-semibold text-airbnb-text hover:bg-airbnb-hover transition-colors">
              Message host
            </button>
          </div>
        </div>

        <Divider />

        {/* House rules */}
        <div>
          <h2 className="text-2xl font-semibold text-airbnb-text mb-6">
            Things to know
          </h2>
          <div className="grid grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-3">House rules</h3>
              <ul className="space-y-2 text-sm text-airbnb-text">
                <li>Check-in after {booking.checkInTime}</li>
                <li>Checkout before {booking.checkOutTime}</li>
                <li>Maximum {listing.guests} guests</li>
                <li>No pets</li>
                <li>No parties or events</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Safety & property</h3>
              <ul className="space-y-2 text-sm text-airbnb-text">
                <li>Carbon monoxide alarm installed</li>
                <li>Smoke alarm installed</li>
                <li>Security camera/recording device</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Cancellation policy</h3>
              <p className="text-sm text-airbnb-text">
                Free cancellation for 48 hours. Cancel before check-in for a
                full refund.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Suspense fallback={null}>
          <Lightbox
            photos={photos}
            initialIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        </Suspense>
      )}
    </div>
  );
};

export default ListingPage;
