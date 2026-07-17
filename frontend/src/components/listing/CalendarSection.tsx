import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CalendarSectionProps {
  minNights: number;
  checkInTime: string;
  checkOutTime: string;
}

// Simple inline calendar for date selection display
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

const CalendarSection: React.FC<CalendarSectionProps> = ({
  minNights,
  checkInTime,
  checkOutTime,
}) => {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);

  const secondMonth = viewMonth === 11 ? 0 : viewMonth + 1;
  const secondYear = viewMonth === 11 ? viewYear + 1 : viewYear;

  const goBack = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  };

  const goForward = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  };

  const handleDayClick = (date: Date) => {
    if (date < today) return;
    if (!checkIn || (checkIn && checkOut)) {
      setCheckIn(date);
      setCheckOut(null);
    } else {
      if (date <= checkIn) {
        setCheckIn(date);
        setCheckOut(null);
      } else {
        setCheckOut(date);
      }
    }
  };

  const isSelected = (date: Date) =>
    (checkIn && date.toDateString() === checkIn.toDateString()) ||
    (checkOut && date.toDateString() === checkOut.toDateString());

  const isInRange = (date: Date) =>
    checkIn && checkOut && date > checkIn && date < checkOut;

  const isPast = (date: Date) => {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    const t = new Date(today);
    t.setHours(0, 0, 0, 0);
    return d < t;
  };

  const renderMonth = (year: number, month: number) => {
    const days = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const cells: (number | null)[] = [
      ...Array(firstDay).fill(null),
      ...Array.from({ length: days }, (_, i) => i + 1),
    ];

    return (
      <div>
        <h3 className="text-base font-semibold text-center mb-4">
          {MONTHS[month]} {year}
        </h3>
        <div className="grid grid-cols-7 gap-0">
          {DAYS.map((d) => (
            <div
              key={d}
              className="text-center text-xs font-semibold text-airbnb-secondary pb-2"
            >
              {d}
            </div>
          ))}
          {cells.map((day, idx) => {
            if (!day) return <div key={`empty-${idx}`} />;
            const date = new Date(year, month, day);
            const past = isPast(date);
            const selected = isSelected(date);
            const inRange = isInRange(date);

            return (
              <div
                key={day}
                className={`calendar-cell text-sm
                  ${past ? "disabled text-airbnb-border cursor-default" : "cursor-pointer hover:bg-airbnb-light"}
                  ${selected ? "bg-airbnb-text text-white rounded-full hover:bg-airbnb-text" : ""}
                  ${inRange && !selected ? "bg-airbnb-light rounded-none" : ""}
                `}
                onClick={() => !past && handleDayClick(date)}
                role="button"
                aria-label={`${MONTHS[month]} ${day}, ${year}`}
                aria-pressed={!!selected}
                aria-disabled={past}
                tabIndex={past ? -1 : 0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    if (!past) handleDayClick(date);
                  }
                }}
              >
                {day}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const formatDate = (d: Date) =>
    `${MONTHS[d.getMonth()].slice(0, 3)} ${d.getDate()}, ${d.getFullYear()}`;

  return (
    <div>
      <h2 className="text-2xl font-semibold text-airbnb-text mb-2">
        {checkIn && checkOut
          ? `${Math.round((checkOut.getTime() - checkIn.getTime()) / 86400000)} nights in ${checkIn.toDateString() !== checkOut.toDateString() ? "Candolim" : "Candolim"}`
          : `Select check-in date`}
      </h2>
      <p className="text-airbnb-secondary text-base mb-6">
        {checkIn && checkOut
          ? `${formatDate(checkIn)} – ${formatDate(checkOut)}`
          : `Minimum stay: ${minNights} nights`}
      </p>

      {/* Calendar header with navigation */}
      <div className="relative">
        <button
          onClick={goBack}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full hover:bg-airbnb-hover transition-colors border border-airbnb-border"
          aria-label="Previous months"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={goForward}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full hover:bg-airbnb-hover transition-colors border border-airbnb-border"
          aria-label="Next months"
        >
          <ChevronRight size={18} />
        </button>

        {/* Two-month calendar grid */}
        <div className="grid grid-cols-2 gap-8 px-10">
          {renderMonth(viewYear, viewMonth)}
          {renderMonth(secondYear, secondMonth)}
        </div>
      </div>

      {/* Clear dates */}
      {(checkIn || checkOut) && (
        <div className="mt-4 flex justify-end">
          <button
            onClick={() => { setCheckIn(null); setCheckOut(null); }}
            className="text-sm font-semibold underline text-airbnb-text hover:text-airbnb-secondary"
          >
            Clear dates
          </button>
        </div>
      )}

      {/* Info */}
      <div className="mt-6 flex gap-8 text-sm text-airbnb-secondary">
        <p>Check-in after {checkInTime}</p>
        <p>Checkout before {checkOutTime}</p>
      </div>
    </div>
  );
};

export default CalendarSection;
