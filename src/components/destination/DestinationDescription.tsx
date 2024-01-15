import { useEffect, useRef, useState } from "react";
import { Destinations } from "../../shared/types";
import { useAnimate, stagger } from "framer-motion";
import useExitAnimation from "../../hooks/useExitAnimation";
import useEnterAnimation from "../../hooks/useEnterAnimation";

type Props = {
  data: Destinations;
  runAnimate: boolean;
  setRunAnimate: (value: boolean) => void;
};

const DestinationDescription = ({ data, runAnimate, setRunAnimate }: Props) => {
  const [currentData, setCurrentData] = useState<Destinations>(data);
  const rootElement = useRef(null!);
  const [triggerExit, setTriggerExit] = useState<boolean>(false);
  const [triggerEnter, setTriggerEnter] = useState<boolean>(false);
  const exitAnimated = useExitAnimation(rootElement, triggerExit);
  const enterAnimated = useEnterAnimation(
    rootElement,
    triggerEnter,
    ".animate-item"
  );

  useEffect(() => {
    // TRIGGER EXIT ANIMATION IF THERE'S NEW DATA
    if (runAnimate && data.name !== currentData.name) {
      // MAKE SURE ENTER ANIMATION IS NOT RUNNING
      setTriggerEnter(false);
      setTriggerExit(true);
    }
  }, [runAnimate]);

  useEffect(() => {
    // RUN ENTRY ANIMATION WHEN DATA CHANGES
    if (exitAnimated && runAnimate) {
      setTriggerExit(false);
      setCurrentData(data);
      setTriggerEnter(true);
      setRunAnimate(false);
    }
  }, [exitAnimated]);

  useEffect(() => {
    if (rootElement.current != null) {
      rootElement.current.style.opacity = "0";
      setTriggerEnter(true);
    }
  }, []);

  return (
    <article
      ref={rootElement}
      className="flex flex-col h-[500px] align-top text-center gap-5 md:h-[400px] lg:h-auto lg:items-start lg:text-left animate-item"
    >
      {/* PLANET NAME */}
      <h3 className="lg:text-[100px] animate-item">
        {currentData.name.toUpperCase()}
      </h3>
      {/* PLANET DESCRIPTION */}
      <p className=" text-light-violet line leading-[25px] animate-item">
        {currentData.description}
      </p>
      <div className="w-full h-full animate-item">
        <hr className="opacity-[0.2515] my-8 lg:w-full" />
      </div>

      <div className="text-center md:flex md:justify-around lg:gap-24 lg:text-left animate-item">
        {/* DISTANCE FROM EARTH */}
        <div className="celestial-ite">
          <h5 className="text-light-violet text-[18px]">AVG. DISTANCE</h5>
          <h4>{currentData.distance}</h4>
        </div>

        {/* TRAVEL TIME */}
        <div className="pt-5 md:pt-0 animate-item">
          <h5 className="text-light-violet text-[18px]">EST. TRAVEL TIME</h5>
          <h4>{currentData.travel}</h4>
        </div>
      </div>
    </article>
  );
};

export default DestinationDescription;
