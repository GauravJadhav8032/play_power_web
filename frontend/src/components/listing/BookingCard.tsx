import React, { useState } from "react";
import type { Listing, BookingData } from "../../types";
import { Star, ChevronDown, ChevronUp, X } from "lucide-react";

interface BookingCardProps {
  listing: Listing;
  booking: BookingData;
}

const MONTHS_SHORT = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const formatDate = (d: Date) =>
  `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;

const BookingCard: React.FC<BookingCardProps> = ({ listing, booking }) => {
  const [showBreakdown, setShowBreakdown] = useState(false);
  const [checkIn, setCheckIn] = useState<string>("");
  const [checkOut, setCheckOut] = useState<string>("");
  const [guests, setGuests] = useState(1);
  const [guestsOpen, setGuestsOpen] = useState(false);

  const nights =
    checkIn && checkOut
      ? Math.max(
          0,
          Math.round(
            (new Date(checkOut).getTime() - new Date(checkIn).getTime()) /
              86400000
          )
        )
      : 0;

  const baseTotal = nights * booking.pricePerNight;
  const total =
    nights > 0
      ? baseTotal + booking.cleaningFee + booking.serviceFee + booking.taxes
      : 0;

  const formatCurrency = (amount: number) =>
    `${booking.currency}${amount.toLocaleString("en-IN")}`;

  return (
    <div
      className="border border-airbnb-border rounded-2xl p-6 shadow-booking"
      role="complementary"
      aria-label="Booking card"
    >
      {/* Price */}
      <div className="flex items-baseline justify-between mb-4">
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-semibold text-airbnb-text">
            {formatCurrency(booking.pricePerNight)}
          </span>
          <span className="text-base text-airbnb-secondary"> night</span>
        </div>
        <div className="flex items-center gap-1">
          <Star size={12} className="fill-airbnb-text text-airbnb-text" />
          <span className="text-sm font-semibold">{listing.rating.toFixed(2)}</span>
          <span className="text-sm text-airbnb-secondary">
            · {listing.reviewCount} reviews
          </span>
        </div>
      </div>

      {/* Date pickers */}
      <div className="border border-airbnb-border rounded-xl overflow-hidden mb-3">
        <div className="grid grid-cols-2">
          <div className="p-3 border-r border-airbnb-border">
            <label
              className="block text-xs font-semibold text-airbnb-text uppercase tracking-wide mb-1"
              htmlFor="checkin-date"
            >
              Check-in
            </label>
            <input
              id="checkin-date"
              type="date"
              value={checkIn}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => {
                setCheckIn(e.target.value);
                if (checkOut && e.target.value >= checkOut) setCheckOut("");
              }}
              className="w-full text-sm text-airbnb-text bg-transparent outline-none"
              aria-label="Check-in date"
            />
          </div>
          <div className="p-3">
            <label
              className="block text-xs font-semibold text-airbnb-text uppercase tracking-wide mb-1"
              htmlFor="checkout-date"
            >
              Checkout
            </label>
            <input
              id="checkout-date"
              type="date"
              value={checkOut}
              min={checkIn || new Date().toISOString().split("T")[0]}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full text-sm text-airbnb-text bg-transparent outline-none"
              aria-label="Checkout date"
            />
          </div>
        </div>

        {/* Guests */}
        <div className="border-t border-airbnb-border">
          <button
            onClick={() => setGuestsOpen(!guestsOpen)}
            className="w-full p-3 flex items-center justify-between text-left"
            aria-expanded={guestsOpen}
            aria-label="Select number of guests"
          >
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide">
                Guests
              </div>
              <div className="text-sm text-airbnb-text">
                {guests} guest{guests !== 1 ? "s" : ""}
              </div>
            </div>
            {guestsOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {guestsOpen && (
            <div className="px-4 pb-4 border-t border-airbnb-border">
              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="text-sm font-semibold">Adults</p>
                  <p className="text-xs text-airbnb-secondary">Age 13+</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    disabled={guests <= 1}
                    className="w-8 h-8 rounded-full border border-airbnb-border flex items-center justify-center text-airbnb-text hover:border-airbnb-text disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    aria-label="Decrease guests"
                  >
                    −
                  </button>
                  <span className="w-4 text-center text-sm font-medium">
                    {guests}
                  </span>
                  <button
                    onClick={() =>
                      setGuests(Math.min(listing.guests, guests + 1))
                    }
                    disabled={guests >= listing.guests}
                    className="w-8 h-8 rounded-full border border-airbnb-border flex items-center justify-center text-airbnb-text hover:border-airbnb-text disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    aria-label="Increase guests"
                  >
                    +
                  </button>
                </div>
              </div>
              <p className="text-xs text-airbnb-secondary">
                Maximum {listing.guests} guests
              </p>
              <button
                onClick={() => setGuestsOpen(false)}
                className="mt-3 text-sm font-semibold underline"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Reserve button */}
      <button
        className="w-full bg-gradient-to-r from-[#E61E4D] to-[#FF385C] hover:from-[#D70466] hover:to-[#E61E4D] text-white font-semibold py-4 rounded-xl transition-all duration-200 text-base"
        aria-label={nights > 0 ? `Reserve for ${formatCurrency(total)}` : "Reserve"}
      >
        {nights > 0 ? "Reserve" : "Check availability"}
      </button>

      {nights === 0 && (
        <p className="text-center text-sm text-airbnb-secondary mt-3">
          You won't be charged yet
        </p>
      )}

      {/* Price breakdown */}
      {nights > 0 && (
        <div className="mt-4 space-y-3">
          <button
            onClick={() => setShowBreakdown(!showBreakdown)}
            className="w-full flex items-center justify-between text-sm"
            aria-expanded={showBreakdown}
          >
            <span className="underline text-airbnb-text font-medium">
              {formatCurrency(booking.pricePerNight)} × {nights} night
              {nights !== 1 ? "s" : ""}
            </span>
            <span className="font-medium">{formatCurrency(baseTotal)}</span>
          </button>

          {showBreakdown && (
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="underline">Cleaning fee</span>
                <span>{formatCurrency(booking.cleaningFee)}</span>
              </div>
              <div className="flex justify-between">
                <span className="underline">Airbnb service fee</span>
                <span>{formatCurrency(booking.serviceFee)}</span>
              </div>
              <div className="flex justify-between">
                <span className="underline">Taxes</span>
                <span>{formatCurrency(booking.taxes)}</span>
              </div>
            </div>
          )}

          <div className="pt-4 border-t border-airbnb-border flex justify-between font-semibold text-base">
            <span>Total before taxes</span>
            <span>
              {formatCurrency(baseTotal + booking.cleaningFee + booking.serviceFee)}
            </span>
          </div>
        </div>
      )}

      {/* Cancellation policy */}
      <p className="mt-4 text-center text-sm text-airbnb-secondary">
        Free cancellation before check-in
      </p>
    </div>
  );
};

export default BookingCard;
