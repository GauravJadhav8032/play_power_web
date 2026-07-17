import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, Globe, Menu, User } from "lucide-react";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${scrolled ? "shadow-[0_1px_0_rgba(0,0,0,0.08)]" : ""
        }`}
      style={{ height: "var(--header-height)" }}
    >
      <div className="max-w-[1760px] mx-auto px-10 h-full flex items-center justify-between gap-6">
        {/* Logo */}
        <Link
          to="/"
          className="flex-shrink-0 flex items-center"
          aria-label="Airbnb home"
        >
          <AirbnbLogo />
        </Link>

        {/* Search bar pill */}
        <div className="flex-1 flex justify-center">
          <div className="flex items-center border border-airbnb-border rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.08)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.18)] transition-shadow duration-200 cursor-pointer">
            <button
              className="px-5 py-3 text-sm font-semibold text-airbnb-text hover:bg-airbnb-hover rounded-full transition-colors"
              aria-label="Where to go"
            >
              Anywhere
            </button>
            <div className="w-px h-5 bg-airbnb-border" />
            <button
              className="px-5 py-3 text-sm font-semibold text-airbnb-text hover:bg-airbnb-hover rounded-full transition-colors"
              aria-label="When"
            >
              Any week
            </button>
            <div className="w-px h-5 bg-airbnb-border" />
            <div className="flex items-center gap-3 px-3 py-2">
              <button
                className="text-sm text-airbnb-secondary hover:bg-airbnb-hover rounded-full px-3 py-1 transition-colors"
                aria-label="Add guests"
              >
                Add guests
              </button>
              <button
                className="bg-airbnb-red hover:bg-airbnb-dark p-2 rounded-full transition-colors"
                aria-label="Search"
              >
                <Search size={14} className="text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Right nav */}
        <nav className="flex-shrink-0 flex items-center gap-2">
          <a
            href="#"
            className="text-sm font-semibold text-airbnb-text px-4 py-2 rounded-full hover:bg-airbnb-hover transition-colors whitespace-nowrap"
            aria-label="Become a host"
          >
            Become a host
          </a>
          <button
            className="p-2 rounded-full hover:bg-airbnb-hover transition-colors"
            aria-label="Language and region"
          >
            <Globe size={18} className="text-airbnb-text" />
          </button>
          <button
            className="flex items-center gap-3 border border-airbnb-border rounded-full px-3 py-2 hover:shadow-[0_2px_4px_rgba(0,0,0,0.18)] transition-shadow"
            aria-label="User menu"
          >
            <Menu size={18} className="text-airbnb-text" />
            <div className="w-8 h-8 rounded-full bg-airbnb-secondary flex items-center justify-center overflow-hidden">
              <User size={18} className="text-white" />
            </div>
          </button>
        </nav>
      </div>
    </header>
  );
};

const AirbnbLogo: React.FC = () => (
  <img
    src="/airbnb-logo.png"
    alt="Airbnb"
    className="h-32 w-auto object-contain object-left"
  />
);

export default Header;
