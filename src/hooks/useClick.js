import { useEffect, useCallback } from "react";

export const useClick = (callback) => {
  const onClick = useCallback(() => {
    callback();
  }, [callback]);

  useEffect(() => {
    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [onClick]);
};
