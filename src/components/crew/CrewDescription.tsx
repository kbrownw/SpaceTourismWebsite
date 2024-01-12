import { useState, useEffect } from "react";
import { Crew } from "../../shared/types";
import { useAnimate, stagger } from "framer-motion";

type Props = {
  crewData: Crew;
  runAnimate: boolean;
  setRunAnimate: (value: boolean) => void;
};

const CrewDescription = ({ crewData, runAnimate, setRunAnimate }: Props) => {
  const [currentData, setCurrentData] = useState<Crew>(crewData);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    // RUN EXIT ANIMATION FOR NEW DATA
    if (runAnimate && crewData.name !== currentData.name) {
      const exitAnimation = async () => {
        await animate(
          scope.current,
          { opacity: 0, x: "-100px" },
          { duration: 0.2 }
        );
        setCurrentData(crewData);
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
    <article
      ref={scope}
      className="text-center mx-auto w-5/6 my-5 md:w-2/3 md:mt-16 lg:text-left lg:mt-36 lg:ml-28 lg:min-h-[350px]"
    >
      <div className="animate-item">
        <h4 className="text-[20px] opacity-50 md:text-[28px]">
          {currentData.role.toUpperCase()}
        </h4>
      </div>

      <h4 className="text-[28px] animate-item md:text-[44px]">
        {currentData.name.toUpperCase()}
      </h4>
      <p className="text-light-violet mt-5 animate-item">{currentData.bio}</p>
    </article>
  );
};

export default CrewDescription;
