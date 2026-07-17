import React, { useState } from "react";

interface AboutSpaceProps {
  description: string;
  hostName: string;
}

const AboutSpace: React.FC<AboutSpaceProps> = ({ description, hostName }) => {
  const [expanded, setExpanded] = useState(false);

  const CHAR_LIMIT = 300;
  const shouldTruncate = description.length > CHAR_LIMIT;
  const displayText =
    shouldTruncate && !expanded
      ? description.slice(0, CHAR_LIMIT) + "..."
      : description;

  return (
    <div>
      <div className="text-base text-airbnb-text leading-relaxed whitespace-pre-line">
        {displayText}
      </div>

      {shouldTruncate && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 flex items-center gap-1 font-semibold text-airbnb-text underline text-base hover:text-airbnb-secondary transition-colors"
          aria-expanded={expanded}
          aria-label={
            expanded ? "Show less description" : "Show more description"
          }
        >
          {expanded ? "Show less" : `Show more about the space`}
          <span className="ml-1">{expanded ? "↑" : "→"}</span>
        </button>
      )}

      {/* Host info line */}
      <div className="mt-6 flex items-center gap-3 text-sm text-airbnb-secondary">
        <span>Hosted by {hostName}</span>
      </div>
    </div>
  );
};

export default AboutSpace;
