import React from "react";
import type { AmenityCategory } from "../../types";
import Modal from "../ui/Modal";
import {
  Wifi,
  Tv,
  Wind,
  Package,
  Utensils,
  Car,
  Key,
  Coffee,
  Flame,
  Bell,
  Shield,
  Sun,
  Sofa,
  Bath,
  Layers,
  Shirt,
  Monitor,
  Building2,
  Speaker,
  Fan,
} from "lucide-react";

interface AmenitiesSectionProps {
  amenities: AmenityCategory[];
}

const iconMap: Record<string, React.ReactNode> = {
  wifi: <Wifi size={24} />,
  tv: <Tv size={24} />,
  wind: <Wind size={24} />,
  package: <Package size={24} />,
  utensils: <Utensils size={24} />,
  car: <Car size={24} />,
  key: <Key size={24} />,
  coffee: <Coffee size={24} />,
  flame: <Flame size={24} />,
  bell: <Bell size={24} />,
  shield: <Shield size={24} />,
  sun: <Sun size={24} />,
  sofa: <Sofa size={24} />,
  bath: <Bath size={24} />,
  layers: <Layers size={24} />,
  shirt: <Shirt size={24} />,
  monitor: <Monitor size={24} />,
  building: <Building2 size={24} />,
  speaker: <Speaker size={24} />,
  fan: <Fan size={24} />,
  refrigerator: <Package size={24} />,
  microwave: <Package size={24} />,
  droplets: <Package size={24} />,
  hanger: <Package size={24} />,
  gym: <Package size={24} />,
  "first-aid": <Package size={24} />,
  "concierge-bell": <Bell size={24} />,
  clock: <Package size={24} />,
};

const getIcon = (iconName: string) =>
  iconMap[iconName] ?? <Package size={24} />;

// Show first 10 amenities in the preview
const PREVIEW_COUNT = 10;

const AmenitiesSection: React.FC<AmenitiesSectionProps> = ({ amenities }) => {
  const [showModal, setShowModal] = React.useState(false);

  const allAmenities = amenities.flatMap((cat) => cat.items);
  const previewAmenities = allAmenities.slice(0, PREVIEW_COUNT);

  return (
    <div>
      <h2 className="text-2xl font-semibold text-airbnb-text mb-6">
        What this place offers
      </h2>

      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
        {previewAmenities.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <div className="text-airbnb-text flex-shrink-0">
              {getIcon(item.icon)}
            </div>
            <span className="text-base text-airbnb-text">{item.name}</span>
          </div>
        ))}
      </div>

      {allAmenities.length > PREVIEW_COUNT && (
        <button
          onClick={() => setShowModal(true)}
          className="mt-8 px-6 py-3 border border-airbnb-text rounded-lg text-base font-semibold text-airbnb-text hover:bg-airbnb-hover transition-colors"
          aria-label={`Show all ${allAmenities.length} amenities`}
        >
          Show all {allAmenities.length} amenities
        </button>
      )}

      {/* Amenities Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="What this place offers"
        size="lg"
      >
        <div className="amenity-modal-content px-6 pb-6">
          {amenities.map((category) => (
            <div key={category.category} className="py-6 border-b border-airbnb-border last:border-0">
              <h3 className="text-lg font-semibold text-airbnb-text mb-4">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="text-airbnb-text flex-shrink-0">
                      {getIcon(item.icon)}
                    </div>
                    <span className="text-base text-airbnb-text">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default AmenitiesSection;
