import React from "react";
import { Globe } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-airbnb-border bg-airbnb-hover mt-0">
      <div className="max-w-[1760px] mx-auto px-10 py-4">
        <div className="flex items-center justify-between gap-4 text-sm text-airbnb-secondary">
          {/* Left */}
          <div className="flex items-center flex-wrap gap-x-4 gap-y-1">
            <span>© 2025 Airbnb, Inc.</span>
            <span className="text-airbnb-border">·</span>
            <a href="#" className="hover:underline">Privacy</a>
            <span className="text-airbnb-border">·</span>
            <a href="#" className="hover:underline">Terms</a>
            <span className="text-airbnb-border">·</span>
            <a href="#" className="hover:underline">Sitemap</a>
            <span className="text-airbnb-border">·</span>
            <a href="#" className="hover:underline">Company details</a>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <button className="flex items-center gap-2 font-semibold text-airbnb-text hover:underline">
              <Globe size={16} />
              English (IN)
            </button>
            <button className="font-semibold text-airbnb-text hover:underline">
              ₹ INR
            </button>
            <button className="font-semibold text-airbnb-text hover:underline">
              Support & resources
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
