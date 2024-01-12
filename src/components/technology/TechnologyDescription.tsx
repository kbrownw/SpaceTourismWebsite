import { useState, useEffect } from "react";
import { Technology } from "../../shared/types";
import { useAnimate, stagger } from "framer-motion";

type Props = {
  selectedTech: Technology;
  runAnimate: boolean;
  setRunAnimate: (value: boolean) => void;
};

const TechnologyDescription = ({
  selectedTech,
  runAnimate,
  setRunAnimate,
}: Props) => {
  const [currentData, setCurrentData] = useState<Technology>(selectedTech);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    // RUN EXIT ANIMATION FOR NEW DATA
    if (runAnimate && selectedTech.name !== currentData.name) {
      const exitAnimation = async () => {
        await animate(
          scope.current,
          { opacity: 0, x: "-100px" },
          { duration: 0.2 }
        );
        setCurrentData(selectedTech);
      };
      exitAnimation();
    }
    setRunAnimate(false);
  }, [runAnimate]);

  useEffect(() => {
    // RUN ENTRY ANIMATION WHEN DATA CHANGES
    scope.current.style.opacity = "0";
    const enterAnimation = async () => {
      animate(scope.current, { opacity: 0, x: "0" });
      await animate(
        ".animate-item",
        { opacity: 0, x: "100px" },
        { duration: 0.1 }
      );
      animate(scope.current, { opacity: 1 }, { duration: 0.1 });
      await animate(
        ".animate-item",
        { opacity: 1, x: "0" },
        { duration: 0.3, delay: stagger(0.2) }
      );
    };
    enterAnimation();
  }, [currentData]);

  return (
    <div
      ref={scope}
      className="text-center w-5/6 h-[300px] mx-auto mt-2 mb-2 md:w-3/5 md:mb-20 lg:text-left lg:w-full lg:mt-0 lg:h-auto"
    >
      {/* Intro */}
      <h4 className="animate-item md:text-[48px] lg:text-[64px]">
        {currentData.name.toUpperCase()}
      </h4>
      <p className="text-light-violet mt-5 animate-item">
        {currentData.description}
      </p>
    </div>
  );
};

export default TechnologyDescription;
