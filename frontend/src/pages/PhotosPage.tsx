import React, { useEffect, useState } from "react";
import type { Photo } from "../types";
import { getPhotos, getListing } from "../api";
import PhotoTour from "../components/gallery/PhotoTour";
import type { Listing } from "../types";

const PhotosPage: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [listing, setListing] = useState<Listing | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [photosData, listingData] = await Promise.all([
          getPhotos(),
          getListing(),
        ]);
        setPhotos(photosData.data);
        setListing(listingData);
      } catch (err) {
        console.error("Failed to load photos:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-airbnb-red border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <PhotoTour
      photos={photos}
      listingTitle={listing?.title ?? "Photo Tour"}
    />
  );
};

export default PhotosPage;
