import { Destinations } from "../../shared/types";
import { useState } from "react";
import DestinationDescription from "./DestinationDescription";
import MoonImage from "../../assets/images/destination/image-moon.png";
import MarImage from "../../assets/images/destination/image-mars.png";
import EuropaImage from "../../assets/images/destination/image-europa.png";
import TitanImage from "../../assets/images/destination/image-titan.png";
import DestinationImage from "./DestinationImage";
import useImagePreloader from "../../hooks/useImagePreloader";
import DestinationSelector from "./DestinationSelector";

interface Props {
  data: Destinations[];
}

const preloadSrcList: string[] = [MoonImage, MarImage, EuropaImage, TitanImage];

function DestinationPage({ data }: Props) {
  const [celestialBody, setCelestialBody] = useState<Destinations>(data[0]);
  const { imagesPreloaded } = useImagePreloader(preloadSrcList);

  if (!imagesPreloaded) {
    return <></>;
  }

  return (
    <section className="flex flex-col min-h-auto justify-center items-center w-5/6 mt-5 mx-auto pb-20 md:items-start md:mx-14 lg:flex-row lg:gap-32 lg:mx-28 lg:pb-0">
      <div className="w-full text-center md:text-left lg:w-1/2">
        {/* IMAGE */}
        <div className="w-2/3 my-10 mx-auto md:w-1/2 lg:w-full lg:px-20 lg:py-10">
          <DestinationImage
            data={data}
            preLoadSrcList={preloadSrcList}
            celestialBody={celestialBody}
          />
        </div>
      </div>
      <div className="flex flex-col text-center justify-center md:mx-auto md:max-w-[80%] lg:w-1/2">
        {/* DATA SELECTION MENU */}
        <DestinationSelector
          data={data}
          celestialBody={celestialBody}
          setCelestialBody={setCelestialBody}
        />
        {/* CELESTIAL BODY INFORMATION */}
        <DestinationDescription data={data} celestialBody={celestialBody} />
      </div>
    </section>
  );
}

export default DestinationPage;
