import React from "react";
import type { HighlightItem } from "../../types";
import { DoorOpen, MapPin, CalendarX, Shield, Star, Key } from "lucide-react";

interface PropertyHighlightsProps {
  highlights: HighlightItem[];
}

const iconMap: Record<string, React.ReactNode> = {
  "door-open": <DoorOpen size={24} className="text-airbnb-text" />,
  "map-pin": <MapPin size={24} className="text-airbnb-text" />,
  "calendar": <CalendarX size={24} className="text-airbnb-text" />,
  "shield": <Shield size={24} className="text-airbnb-text" />,
  "star": <Star size={24} className="text-airbnb-text" />,
  "key": <Key size={24} className="text-airbnb-text" />,
};

const PropertyHighlights: React.FC<PropertyHighlightsProps> = ({
  highlights,
}) => {
  return (
    <div className="space-y-5">
      {highlights.map((item, idx) => (
        <div key={idx} className="flex items-start gap-5">
          <div className="flex-shrink-0 mt-0.5">
            {iconMap[item.icon] ?? <Star size={24} className="text-airbnb-text" />}
          </div>
          <div>
            <p className="text-base font-semibold text-airbnb-text">
              {item.title}
            </p>
            <p className="text-sm text-airbnb-secondary mt-0.5">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyHighlights;
