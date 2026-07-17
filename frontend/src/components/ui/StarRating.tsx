import React from "react";
import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  size?: number;
  showValue?: boolean;
  count?: number;
  className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  size = 12,
  showValue = false,
  count,
  className = "",
}) => {
  return (
    <div
      className={`flex items-center gap-1 ${className}`}
      aria-label={`Rating: ${rating} out of 5${count ? `, ${count} reviews` : ""}`}
    >
      <Star
        size={size}
        className="text-airbnb-text fill-airbnb-text"
        aria-hidden="true"
      />
      {showValue && (
        <span className="text-sm font-semibold text-airbnb-text">
          {rating.toFixed(2)}
        </span>
      )}
      {count !== undefined && (
        <span className="text-sm text-airbnb-secondary">
          · {count} {count === 1 ? "review" : "reviews"}
        </span>
      )}
    </div>
  );
};

export default StarRating;
