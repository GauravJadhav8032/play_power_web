import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid2X2 } from "lucide-react";
import type { Photo } from "../../types";

interface PhotoGridProps {
  photos: Photo[];
  onPhotoClick: (index: number) => void;
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ photos, onPhotoClick }) => {
  const navigate = useNavigate();

  const displayPhotos = photos.slice(0, 5);

  // Pad with placeholders if less than 5
  while (displayPhotos.length < 5) {
    displayPhotos.push({
      id: `placeholder-${displayPhotos.length}`,
      url: "",
      caption: "",
      alt: "",
      category: "",
    });
  }

  return (
    <div className="relative mt-4">
      <div className="grid grid-cols-2 gap-2 rounded-2xl overflow-hidden h-[480px]">
        {/* Large left photo */}
        <button
          className="photo-grid-item relative overflow-hidden bg-airbnb-light"
          onClick={() => onPhotoClick(0)}
          aria-label={`View photo 1: ${displayPhotos[0]?.alt || "Property photo"}`}
        >
          {displayPhotos[0]?.url && (
            <img
              src={displayPhotos[0].url}
              alt={displayPhotos[0].alt}
              className="w-full h-full object-cover"
              loading="eager"
            />
          )}
          <div className="absolute inset-0 bg-black/0 hover:bg-black/[0.04] transition-colors" />
        </button>

        {/* Right 2×2 grid */}
        <div className="grid grid-rows-2 grid-cols-2 gap-2">
          {displayPhotos.slice(1, 5).map((photo, idx) => (
            <button
              key={photo.id}
              className="photo-grid-item relative overflow-hidden bg-airbnb-light"
              onClick={() => onPhotoClick(idx + 1)}
              aria-label={`View photo ${idx + 2}: ${photo.alt || "Property photo"}`}
            >
              {photo.url && (
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 bg-black/0 hover:bg-black/[0.04] transition-colors" />
            </button>
          ))}
        </div>
      </div>

      {/* Show all photos button */}
      <button
        onClick={() => navigate("/photos")}
        className="absolute bottom-4 right-4 flex items-center gap-2 bg-white border border-airbnb-text px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-airbnb-hover transition-colors shadow-sm"
        aria-label="Show all photos"
      >
        <Grid2X2 size={16} />
        Show all photos
      </button>
    </div>
  );
};

export default PhotoGrid;
