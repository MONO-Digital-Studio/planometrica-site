
import { useState, useEffect } from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  // Устанавливаем начальное состояние как undefined, чтобы избежать несоответствия гидратации
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const checkIsMobile = () => window.innerWidth < MOBILE_BREAKPOINT;

    const updateMobileState = () => {
      setIsMobile(checkIsMobile());
    };

    updateMobileState();

    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const handleChange = () => {
      updateMobileState();
    };

    if (mql.addEventListener) {
      mql.addEventListener("change", handleChange);
    } else {
      window.addEventListener("resize", handleChange);
    }

    return () => {
      if (mql.removeEventListener) {
        mql.removeEventListener("change", handleChange);
      } else {
        window.removeEventListener("resize", handleChange);
      }
    };
  }, []);

  // Возвращаем false во время SSR, затем фактическое значение после монтирования
  return isMobile === undefined ? false : isMobile;
}
