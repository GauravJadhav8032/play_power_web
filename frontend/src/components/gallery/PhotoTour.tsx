import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { X, Share2, Heart } from "lucide-react";
import type { Photo } from "../../types";
import Lightbox from "./Lightbox";

interface PhotoTourProps {
  photos: Photo[];
  listingTitle: string;
}

const PhotoTour: React.FC<PhotoTourProps> = ({ photos, listingTitle }) => {
  const navigate = useNavigate();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClose = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  // Group photos by category
  const grouped = photos.reduce<Record<string, Photo[]>>((acc, photo) => {
    const cat = photo.category || "Photos";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(photo);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky header */}
      <div
        className="sticky top-0 z-40 bg-white border-b border-airbnb-border"
        style={{ height: "var(--header-height)" }}
      >
        <div className="max-w-[1100px] mx-auto px-6 h-full flex items-center justify-between">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="p-2 -ml-2 rounded-full hover:bg-airbnb-hover transition-colors"
            aria-label="Close photo tour"
          >
            <X size={22} />
          </button>

          {/* Title */}
          <div className="flex-1 text-center">
            <h1 className="text-sm font-semibold text-airbnb-text truncate px-4">
              {listingTitle}
            </h1>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1">
            <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-airbnb-hover transition-colors text-sm font-semibold underline">
              <Share2 size={16} />
              Share
            </button>
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-airbnb-hover transition-colors text-sm font-semibold underline"
              aria-pressed={isFavorite}
              aria-label={isFavorite ? "Remove from wishlist" : "Save to wishlist"}
            >
              <Heart
                size={16}
                className={isFavorite ? "fill-airbnb-red text-airbnb-red" : ""}
              />
              Save
            </button>
          </div>
        </div>
      </div>

      {/* Photo list */}
      <main className="max-w-[1100px] mx-auto px-6 py-8">
        {Object.entries(grouped).map(([category, categoryPhotos]) => (
          <section key={category} className="mb-12" aria-label={category}>
            <h2 className="text-2xl font-semibold text-airbnb-text mb-6">
              {category}
            </h2>
            <div className="space-y-4">
              {categoryPhotos.map((photo) => {
                const globalIndex = photos.findIndex((p) => p.id === photo.id);
                return (
                  <button
                    key={photo.id}
                    onClick={() => openLightbox(globalIndex)}
                    className="w-full text-left group"
                    aria-label={`View ${photo.alt || photo.caption} in fullscreen`}
                  >
                    <div className="rounded-2xl overflow-hidden max-h-[680px] bg-airbnb-light">
                      <img
                        src={photo.url}
                        alt={photo.alt}
                        className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    {photo.caption && (
                      <p className="mt-3 text-sm text-airbnb-secondary">
                        {photo.caption}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>
          </section>
        ))}
      </main>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          photos={photos}
          initialIndex={lightboxIndex}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
};

export default PhotoTour;
