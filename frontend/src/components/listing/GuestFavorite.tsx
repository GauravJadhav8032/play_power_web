import React from "react";
import type { Listing } from "../../types";
import StarRating from "../ui/StarRating";

interface GuestFavoriteProps {
  listing: Listing;
}

const GuestFavorite: React.FC<GuestFavoriteProps> = ({ listing }) => {
  return (
    <div className="border border-airbnb-border rounded-2xl p-6 flex items-center gap-6">
      {/* Guest Favourite badge */}
      {listing.isGuestFavorite && (
        <div className="flex items-center gap-3 flex-1">
          <GuestFavouriteIcon />
          <div>
            <div className="text-sm font-semibold text-airbnb-text">
              Guest favourite
            </div>
            <div className="text-xs text-airbnb-secondary mt-0.5 max-w-[160px]">
              One of the most loved homes on Airbnb, according to guests
            </div>
          </div>
        </div>
      )}

      {/* Divider */}
      <div className="w-px h-14 bg-airbnb-border flex-shrink-0" />

      {/* Rating */}
      <div className="flex-1 text-center">
        <div className="text-3xl font-semibold text-airbnb-text">
          {listing.rating.toFixed(2)}
        </div>
        <div className="mt-1.5">
          <StarRating rating={listing.rating} size={14} />
        </div>
      </div>

      {/* Divider */}
      <div className="w-px h-14 bg-airbnb-border flex-shrink-0" />

      {/* Reviews */}
      <div className="flex-1 text-center">
        <div className="text-3xl font-semibold text-airbnb-text underline cursor-pointer">
          {listing.reviewCount}
        </div>
        <div className="text-xs text-airbnb-secondary mt-1 font-semibold uppercase tracking-wide">
          Reviews
        </div>
      </div>
    </div>
  );
};

const GuestFavouriteIcon: React.FC = () => (
  <svg
    viewBox="0 0 56 56"
    className="w-12 h-12 flex-shrink-0"
    aria-hidden="true"
  >
    <path
      d="M28 0L35.62 20.82L56 28L35.62 35.18L28 56L20.38 35.18L0 28L20.38 20.82L28 0Z"
      fill="none"
      stroke="#222222"
      strokeWidth="1.5"
    />
    <path
      d="M28 8L33.5 23.5L49 28L33.5 32.5L28 48L22.5 32.5L7 28L22.5 23.5L28 8Z"
      fill="none"
      stroke="#222222"
      strokeWidth="1.5"
    />
    <circle cx="28" cy="28" r="3" fill="#222222" />
  </svg>
);

export default GuestFavorite;
