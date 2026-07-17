import React, { useState } from "react";
import type { ReviewsData, Review } from "../../types";
import StarRating from "../ui/StarRating";
import Modal from "../ui/Modal";
import { Star } from "lucide-react";

interface ReviewsSectionProps {
  reviewsData: ReviewsData;
}

const PREVIEW_COUNT = 6;

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  const [expanded, setExpanded] = useState(false);
  const LIMIT = 200;
  const shouldTruncate = review.text.length > LIMIT;
  const displayText =
    shouldTruncate && !expanded ? review.text.slice(0, LIMIT) + "..." : review.text;

  return (
    <div className="flex flex-col gap-3">
      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-airbnb-secondary flex-shrink-0">
          <div className="w-full h-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white font-semibold text-sm">
            {review.author[0]}
          </div>
        </div>
        <div>
          <p className="font-semibold text-sm text-airbnb-text">{review.author}</p>
          <p className="text-xs text-airbnb-secondary">{review.location}</p>
        </div>
      </div>

      {/* Rating + date */}
      <div className="flex items-center gap-2">
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={10}
              className={i < review.rating ? "fill-airbnb-text text-airbnb-text" : "text-airbnb-border"}
            />
          ))}
        </div>
        <span className="text-xs text-airbnb-secondary">{review.date}</span>
      </div>

      {/* Text */}
      <p className="text-sm text-airbnb-text leading-relaxed">{displayText}</p>
      {shouldTruncate && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm font-semibold underline text-airbnb-text self-start hover:text-airbnb-secondary"
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
};

const ReviewsSection: React.FC<ReviewsSectionProps> = ({ reviewsData }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <Star size={20} className="fill-airbnb-text text-airbnb-text" />
        <span className="text-2xl font-semibold text-airbnb-text">
          {reviewsData.overallRating.toFixed(2)}
        </span>
        <span className="text-2xl text-airbnb-secondary">·</span>
        <button
          onClick={() => setShowModal(true)}
          className="text-2xl font-semibold text-airbnb-text underline hover:text-airbnb-secondary"
        >
          {reviewsData.totalCount} reviews
        </button>
      </div>

      {/* Category ratings */}
      <div className="grid grid-cols-2 gap-x-16 gap-y-4 mb-10">
        {reviewsData.categories.map((cat) => (
          <div key={cat.name} className="flex items-center justify-between gap-4">
            <span className="text-sm text-airbnb-text">{cat.name}</span>
            <div className="flex items-center gap-3 flex-1 justify-end max-w-[180px]">
              <div className="flex-1 h-1 bg-airbnb-border rounded-full overflow-hidden">
                <div
                  className="h-full bg-airbnb-text rounded-full"
                  style={{ width: `${(cat.rating / 5) * 100}%` }}
                />
              </div>
              <span className="text-sm font-medium text-airbnb-text w-8 text-right">
                {cat.rating.toFixed(1)}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Reviews grid */}
      <div className="grid grid-cols-2 gap-x-12 gap-y-10">
        {reviewsData.reviews.slice(0, PREVIEW_COUNT).map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      {/* Show all */}
      {reviewsData.reviews.length > PREVIEW_COUNT && (
        <button
          onClick={() => setShowModal(true)}
          className="mt-8 px-6 py-3 border border-airbnb-text rounded-lg text-base font-semibold text-airbnb-text hover:bg-airbnb-hover transition-colors"
        >
          Show all {reviewsData.totalCount} reviews
        </button>
      )}

      {/* All reviews modal */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={`${reviewsData.totalCount} reviews`}
        size="xl"
      >
        <div className="amenity-modal-content px-6 pb-6">
          {/* Summary */}
          <div className="flex items-center gap-3 py-6 border-b border-airbnb-border">
            <Star size={20} className="fill-airbnb-text text-airbnb-text" />
            <span className="text-2xl font-semibold">{reviewsData.overallRating.toFixed(2)}</span>
            <span className="text-airbnb-secondary">·</span>
            <span className="text-xl font-semibold">{reviewsData.totalCount} reviews</span>
          </div>

          {/* Category bars */}
          <div className="grid grid-cols-2 gap-4 py-6 border-b border-airbnb-border">
            {reviewsData.categories.map((cat) => (
              <div key={cat.name} className="flex items-center justify-between gap-4">
                <span className="text-sm">{cat.name}</span>
                <div className="flex items-center gap-3 flex-1 justify-end max-w-[180px]">
                  <div className="flex-1 h-1 bg-airbnb-border rounded-full overflow-hidden">
                    <div
                      className="h-full bg-airbnb-text rounded-full"
                      style={{ width: `${(cat.rating / 5) * 100}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium w-8 text-right">{cat.rating.toFixed(1)}</span>
                </div>
              </div>
            ))}
          </div>

          {/* All reviews */}
          <div className="space-y-8 py-6">
            {reviewsData.reviews.map((review) => (
              <div key={review.id} className="border-b border-airbnb-border pb-8 last:border-0">
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ReviewsSection;
