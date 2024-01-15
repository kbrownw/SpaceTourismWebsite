import { animate } from "framer-motion";
import { useEffect, useState } from "react";

const useExitAnimation = (element: any, trigger: boolean) => {
  const [animated, setAnimated] = useState<boolean>(false);

  useEffect(() => {
    // RUN EXIT ANIMATION
    if (trigger && element) {
      setAnimated(false);
      const exitAnimation = async () => {
        await animate(
          element.current,
          { opacity: 0, x: "-100px" },
          { duration: 0.2 }
        );
        setAnimated(true);
      };
      exitAnimation();
    }
  }, [trigger]);

  return animated;
};

export default useExitAnimation;
