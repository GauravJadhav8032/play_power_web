import { useEffect } from "react";

type KeyHandler = (e: KeyboardEvent) => void;

/**
 * Attaches keyboard listeners. Cleans up on unmount.
 */
export function useKeyboard(
  handlers: Record<string, KeyHandler>,
  isActive: boolean = true
) {
  useEffect(() => {
    if (!isActive) return;

    const onKeyDown = (e: KeyboardEvent) => {
      const handler = handlers[e.key];
      if (handler) {
        handler(e);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [handlers, isActive]);
}
