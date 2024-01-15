import { useEffect, useState } from "react";
import { animate, stagger } from "framer-motion";

const useEnterAnimation = (
  element: any,
  trigger: boolean,
  subElement: string
) => {
  const [animated, setAnimated] = useState<boolean>(true);

  useEffect(() => {
    if (trigger && element) {
      setAnimated(false);
      const enterAnimation = async () => {
        animate(element.current, { opacity: 0, x: "0" });
        await animate(
          subElement,
          { opacity: 0, x: "200px" },
          { duration: 0.1 }
        );
        animate(element.current, { opacity: 1 }, { duration: 0.1 });
        await animate(
          subElement,
          { opacity: 1, x: "0" },
          { duration: 0.2, delay: stagger(0.1) }
        );
        setAnimated(true);
      };
      enterAnimation();
    }
  }, [trigger]);

  return animated;
};

export default useEnterAnimation;
