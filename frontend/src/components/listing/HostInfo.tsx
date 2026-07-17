import React from "react";
import type { Listing } from "../../types";
import { Shield, User } from "lucide-react";

interface HostInfoProps {
  listing: Listing;
}

const HostInfo: React.FC<HostInfoProps> = ({ listing }) => {
  const { host } = listing;

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-airbnb-text">
            {listing.type} hosted by {host.name}
          </h2>
          <p className="text-airbnb-secondary mt-1">
            {listing.guests} guests · {listing.bedrooms} bedroom ·{" "}
            {listing.beds} bed · {listing.bathrooms} bathroom
          </p>
        </div>

        {/* Avatar */}
        <div className="relative flex-shrink-0">
          <div className="w-14 h-14 rounded-full overflow-hidden bg-airbnb-secondary flex items-center justify-center">
            <User size={32} className="text-white" />
          </div>
          {host.isSuperhost && (
            <div className="absolute -bottom-1 -right-1 bg-airbnb-red rounded-full w-5 h-5 flex items-center justify-center">
              <Shield size={10} className="text-white" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HostInfo;
