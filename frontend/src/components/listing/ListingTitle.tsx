import React, { useState } from "react";
import { Share2, Heart } from "lucide-react";

interface ListingTitleProps {
  title: string;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

const ListingTitle: React.FC<ListingTitleProps> = ({
  title,
  isFavorite,
  onToggleFavorite,
}) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="flex items-start justify-between mt-5 mb-4">
      <h1 className="text-3xl font-semibold text-airbnb-text leading-tight max-w-[calc(100%-200px)]">
        {title}
      </h1>

      <div className="flex items-center gap-1 flex-shrink-0">
        {/* Share */}
        <button
          onClick={handleShare}
          className="flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-airbnb-hover transition-colors text-sm font-semibold underline text-airbnb-text"
          aria-label="Share this listing"
        >
          <Share2 size={16} />
          {copied ? "Copied!" : "Share"}
        </button>

        {/* Save / Favorite */}
        <button
          onClick={onToggleFavorite}
          className="flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-airbnb-hover transition-colors text-sm font-semibold underline text-airbnb-text"
          aria-label={isFavorite ? "Remove from wishlist" : "Save to wishlist"}
          aria-pressed={isFavorite}
        >
          <Heart
            size={16}
            className={
              isFavorite
                ? "text-airbnb-red fill-airbnb-red"
                : "text-airbnb-text"
            }
          />
          Save
        </button>
      </div>
    </div>
  );
};

export default ListingTitle;
