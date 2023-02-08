import { useEffect, useRef } from "react";

export const useOutClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickOut = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const element = ref.current as HTMLDivElement;

      if (!element.contains(target)) {
        callback();
      }
    };

    window.addEventListener("mousedown", clickOut);

    return () => {
      window.removeEventListener("mousedown", clickOut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
};
