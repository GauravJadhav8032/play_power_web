import React, { useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Photo } from "../../types";
import { useFocusTrap } from "../../hooks/useFocusTrap";
import { useScrollLock } from "../../hooks/useScrollLock";
import { useKeyboard } from "../../hooks/useKeyboard";

interface LightboxProps {
  photos: Photo[];
  initialIndex: number;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({
  photos,
  initialIndex,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const trapRef = useFocusTrap(true);
  useScrollLock(true);

  const goNext = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % photos.length);
  }, [photos.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + photos.length) % photos.length);
  }, [photos.length]);

  useKeyboard({
    Escape: onClose,
    ArrowRight: goNext,
    ArrowLeft: goPrev,
  });

  const current = photos[currentIndex];

  return createPortal(
    <div
      className="fixed inset-0 z-[2000] bg-black flex flex-col"
      role="dialog"
      aria-modal="true"
      aria-label={`Photo ${currentIndex + 1} of ${photos.length}: ${current?.alt}`}
    >
      <div ref={trapRef} className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 flex-shrink-0">
          {/* Close */}
          <button
            onClick={onClose}
            className="p-2 rounded-full text-white hover:bg-white/10 transition-colors"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          {/* Counter */}
          <span className="text-white text-sm font-medium">
            {currentIndex + 1} / {photos.length} photos
          </span>

          {/* Spacer */}
          <div className="w-10" />
        </div>

        {/* Image area */}
        <div className="flex-1 relative flex items-center justify-center overflow-hidden px-16">
          {/* Prev button */}
          <button
            onClick={goPrev}
            className="absolute left-4 z-10 p-3 rounded-full bg-white text-black hover:bg-white/90 transition-colors shadow-lg disabled:opacity-30"
            aria-label="Previous photo"
            disabled={photos.length <= 1}
          >
            <ChevronLeft size={20} />
          </button>

          {/* Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="max-h-full max-w-full flex items-center justify-center"
            >
              <img
                src={current?.url}
                alt={current?.alt}
                className="max-h-[calc(100vh-200px)] max-w-full object-contain rounded-lg"
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>

          {/* Next button */}
          <button
            onClick={goNext}
            className="absolute right-4 z-10 p-3 rounded-full bg-white text-black hover:bg-white/90 transition-colors shadow-lg disabled:opacity-30"
            aria-label="Next photo"
            disabled={photos.length <= 1}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Caption */}
        {current?.caption && (
          <div className="flex-shrink-0 text-center pb-6 px-6">
            <p className="text-white/80 text-sm">{current.caption}</p>
          </div>
        )}

        {/* Thumbnail strip */}
        <div
          className="flex-shrink-0 flex items-center justify-center gap-2 pb-6 px-6 hide-scrollbar overflow-x-auto"
          role="list"
          aria-label="Photo thumbnails"
        >
          {photos.map((photo, idx) => (
            <button
              key={photo.id}
              onClick={() => setCurrentIndex(idx)}
              className={`flex-shrink-0 w-14 h-10 rounded overflow-hidden border-2 transition-all ${
                idx === currentIndex
                  ? "border-white opacity-100 scale-110"
                  : "border-transparent opacity-50 hover:opacity-75"
              }`}
              role="listitem"
              aria-label={`Go to photo ${idx + 1}`}
              aria-current={idx === currentIndex}
            >
              <img
                src={photo.url}
                alt={photo.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Lightbox;
