import { useEffect } from "react";

/**
 * Locks body scroll when active.
 * Compensates for scrollbar width to prevent layout shift.
 */
export function useScrollLock(isLocked: boolean) {
  useEffect(() => {
    if (!isLocked) return;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.setProperty(
      "--scrollbar-width",
      `${scrollbarWidth}px`
    );
    document.body.classList.add("scroll-locked");

    return () => {
      document.body.classList.remove("scroll-locked");
      document.documentElement.style.removeProperty("--scrollbar-width");
    };
  }, [isLocked]);
}
