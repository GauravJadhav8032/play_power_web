import React from "react";
import type { Coordinates } from "../../types";

interface LocationSectionProps {
  coordinates: Coordinates;
  location: string;
}

const LocationSection: React.FC<LocationSectionProps> = ({
  coordinates,
  location,
}) => {
  const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${coordinates.lat},${coordinates.lng}&zoom=14&size=800x400&markers=color:red%7C${coordinates.lat},${coordinates.lng}&style=feature:poi|visibility:off&key=DEMO_KEY`;

  const mapsLink = `https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}`;

  return (
    <div>
      <h2 className="text-2xl font-semibold text-airbnb-text mb-6">
        Where you'll be
      </h2>

      {/* Map placeholder (static image or iframe) */}
      <div className="rounded-2xl overflow-hidden h-[400px] bg-airbnb-light relative border border-airbnb-border">
        {/* Iframe of OpenStreetMap */}
        <iframe
          title={`Map showing location in ${location}`}
          src={`https://www.openstreetmap.org/export/embed.html?bbox=${coordinates.lng - 0.02},${coordinates.lat - 0.015},${coordinates.lng + 0.02},${coordinates.lat + 0.015}&layer=mapnik&marker=${coordinates.lat},${coordinates.lng}`}
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          aria-label={`Interactive map showing ${location}`}
        />
      </div>

      {/* Location details */}
      <div className="mt-4">
        <h3 className="text-base font-semibold text-airbnb-text">{location}</h3>
        <p className="mt-2 text-sm text-airbnb-secondary leading-relaxed max-w-2xl">
          Candolim is a beach town in Goa, India, known for its long sandy beach, 
          water sports, beach shacks, and proximity to Fort Aguada. It's a popular 
          destination for both tourists and long-term visitors.
        </p>
        <a
          href={mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-sm font-semibold underline text-airbnb-text hover:text-airbnb-secondary"
          aria-label={`Open ${location} in Google Maps`}
        >
          Show more
        </a>
      </div>
    </div>
  );
};

export default LocationSection;
