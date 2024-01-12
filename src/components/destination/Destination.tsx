import { AnimatePresence, motion } from "framer-motion";
import { Destinations } from "../../shared/types";
import { useState } from "react";
import CelestialBody from "./CelestialBody";
import MoonImage from "../../assets/images/destination/image-moon.png";
import MarImage from "../../assets/images/destination/image-mars.png";
import EuropaImage from "../../assets/images/destination/image-europa.png";
import TitanImage from "../../assets/images/destination/image-titan.png";
import CelestialImage from "./CelestialImage";
import useImagePreloader from "../../hooks/useImagePreloader";

interface Props {
  data: Destinations[];
}

const preloadSrcList: string[] = [MoonImage, MarImage, EuropaImage, TitanImage];

function Destination({ data }: Props) {
  const [runAnimate, setRunAnimate] = useState<boolean>(false);
  const moonData = data[0];
  const marsData = data[1];
  const europaData = data[2];
  const titanData = data[3];
  const selected: string = "text-white border-b-white";
  const unSelected: string = "text-light-violet";
  const selectionDefault: string =
    "text-[18px] py-3 border-transparent border-b-2 transition duration-500 hover:border-b-white/50 ";
  const [celestialBody, setCelestialBody] = useState<Destinations>(moonData);
  const { imagesPreloaded } = useImagePreloader(preloadSrcList);

  if (!imagesPreloaded) {
    return <></>;
  }

  return (
    <motion.section
      key="destination-page"
      className="flex flex-col min-h-auto justify-center items-center w-5/6 mt-5 mx-auto pb-20 md:items-start md:mx-14 lg:flex-row lg:gap-32 lg:mx-28 lg:pb-0"
    >
      <div className="w-full text-center md:text-left lg:w-1/2">
        {/* IMAGE */}
        <div className="w-2/3 my-10 mx-auto md:w-1/2 lg:w-full lg:px-20 lg:py-10">
          <AnimatePresence>
            {celestialBody.name === moonData.name && (
              <CelestialImage source={MoonImage} alt="moon-image" />
            )}
            {celestialBody.name === marsData.name && (
              <CelestialImage source={MarImage} alt="mars-image" />
            )}
            {celestialBody.name === europaData.name && (
              <CelestialImage source={EuropaImage} alt="europa-image" />
            )}
            {celestialBody.name === titanData.name && (
              <CelestialImage source={TitanImage} alt="titan-image" />
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="flex flex-col text-center justify-center md:mx-auto md:max-w-[80%] lg:w-1/2">
        {/* DATA SELECTION MENU */}
        <div className="flex mx-auto justify-between gap-7 my-5 md:gap-10 lg:justify-normal lg:mx-0">
          <button
            onClick={() => {
              setCelestialBody(moonData);
              setRunAnimate(true);
            }}
          >
            <h5
              className={`${
                celestialBody.name === moonData.name ? selected : unSelected
              } ${selectionDefault}`}
            >
              MOON
            </h5>
          </button>
          <button
            onClick={() => {
              setCelestialBody(marsData);
              setRunAnimate(true);
            }}
          >
            <h5
              className={`${
                celestialBody.name === marsData.name ? selected : unSelected
              } ${selectionDefault}`}
            >
              MARS
            </h5>
          </button>
          <button
            onClick={() => {
              setCelestialBody(europaData);
              setRunAnimate(true);
            }}
          >
            <h5
              className={`${
                celestialBody.name === europaData.name ? selected : unSelected
              } ${selectionDefault}`}
            >
              EUROPA
            </h5>
          </button>
          <button
            onClick={() => {
              setCelestialBody(titanData);
              setRunAnimate(true);
            }}
          >
            <h5
              className={`${
                celestialBody.name === titanData.name ? selected : unSelected
              } ${selectionDefault}`}
            >
              TITAN
            </h5>
          </button>
        </div>
        {/* CELESTIAL BODY INFORMATION */}
        <AnimatePresence>
          {celestialBody.name === moonData.name && (
            <CelestialBody
              data={celestialBody}
              runAnimate={runAnimate}
              setRunAnimate={setRunAnimate}
            />
          )}
          {celestialBody.name === marsData.name && (
            <CelestialBody
              data={celestialBody}
              runAnimate={runAnimate}
              setRunAnimate={setRunAnimate}
            />
          )}
          {celestialBody.name === europaData.name && (
            <CelestialBody
              data={celestialBody}
              runAnimate={runAnimate}
              setRunAnimate={setRunAnimate}
            />
          )}
          {celestialBody.name === titanData.name && (
            <CelestialBody
              data={celestialBody}
              runAnimate={runAnimate}
              setRunAnimate={setRunAnimate}
            />
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}

export default Destination;
