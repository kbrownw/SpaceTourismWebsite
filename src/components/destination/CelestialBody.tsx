import { useEffect, useState } from "react";
import { Destinations } from "../../shared/types";
import { useAnimate, motion, stagger } from "framer-motion";

type Props = {
  data: Destinations;
  runAnimate: boolean;
  setRunAnimate: (value: boolean) => void;
};

const CelestialBody = ({ data, runAnimate, setRunAnimate }: Props) => {
  const [scope, animate] = useAnimate();
  const [currentData, setCurrentData] = useState<Destinations>(data);

  useEffect(() => {
    // RUN EXIT ANIMATION FOR NEW DATA
    if (runAnimate && data.name !== currentData.name) {
      const exitAnimation = async () => {
        await animate(
          scope.current,
          { opacity: 0, x: "-100px" },
          { duration: 0.2 }
        );
        setCurrentData(data);
      };
      exitAnimation();
    }
    setRunAnimate(false);
  }, [runAnimate]);

  useEffect(() => {
    // RUN ENTRY ANIMATION WHEN DATA CHANGES
    scope.current.style.opacity = "0";
    const enterAnimation = async () => {
      animate(scope.current, { opacity: 0 });
      await animate(
        ".celestial-item",
        { opacity: 0, x: "200px" },
        { duration: 0.1 }
      );
      animate(scope.current, { opacity: 1 }, { duration: 0.1 });
      await animate(
        ".celestial-item",
        { opacity: 1, x: "0" },
        { duration: 0.3, delay: stagger(0.2) }
      );
    };
    enterAnimation();
  }, [currentData]);

  return (
    <motion.article
      key={currentData.name}
      ref={scope}
      className="flex flex-col h-[500px] align-top text-center gap-5 md:h-[400px] lg:h-auto lg:items-start lg:text-left celestial-item"
    >
      {/* PLANET NAME */}
      <h3 className="lg:text-[100px] celestial-item">
        {currentData.name.toUpperCase()}
      </h3>
      {/* PLANET DESCRIPTION */}
      <p className=" text-light-violet line leading-[25px] celestial-item">
        {currentData.description}
      </p>
      <hr className="opacity-[0.2515] my-8 lg:w-full" />
      <div className="text-center md:flex md:justify-around lg:gap-24 lg:text-left celestial-item">
        {/* DISTANCE FROM EARTH */}
        <div className="celestial-ite">
          <h5 className="text-light-violet text-[18px]">AVG. DISTANCE</h5>
          <h4>{currentData.distance}</h4>
        </div>

        {/* TRAVEL TIME */}
        <div className="pt-5 md:pt-0 celestial-item">
          <h5 className="text-light-violet text-[18px]">EST. TRAVEL TIME</h5>
          <h4>{currentData.travel}</h4>
        </div>
      </div>
    </motion.article>
  );
};

export default CelestialBody;
