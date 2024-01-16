import { useState } from "react";
import AnoushehImage from "../../assets/images/crew/image-anousheh-ansari.png";
import DouglasImage from "../../assets/images/crew/image-douglas-hurley.png";
import MarkImage from "../../assets/images/crew/image-mark-shuttleworth.png";
import VictorImage from "../../assets/images/crew/image-victor-glover.png";
import { Crew } from "../../shared/types";
import useImagePreloader from "../../hooks/useImagePreloader";
import CrewImage from "./CrewImage";
import { useScreenSizeContext } from "../../context/ScreenSizeContext";
import CrewSelector from "./CrewSelector";
import CrewDescription from "./CrewDescription";

const preloadSrcList: string[] = [
  DouglasImage,
  MarkImage,
  VictorImage,
  AnoushehImage,
];

type Props = {
  data: Crew[];
};

const CrewPage = ({ data }: Props) => {
  const { imagesPreloaded } = useImagePreloader(preloadSrcList);
  const { isMediumScreen, isLargeScreen } = useScreenSizeContext();
  const [crewData, setCrewData] = useState<Crew>(data[0]);

  if (!imagesPreloaded) {
    return <></>;
  }

  return (
    <section className="relative grid lg:grid-cols-2 lg:items-stretch lg:justify-stretch lg:min-h-full lg:gap-y-16 lg:gap-x-14">
      {/* CREW IMAGE */}
      <CrewImage
        data={data}
        crewData={crewData}
        preLoadSrcList={preloadSrcList}
      />

      {/* HORIZONTAL RULE */}
      {!isLargeScreen && !isMediumScreen ? (
        <hr className="opacity-[0.2515] w-[90%] mx-auto" />
      ) : null}
      {/* DATA SELECTION */}
      <CrewSelector data={data} crewData={crewData} setCrewData={setCrewData} />
      {/*  */}
      {/* CREW DESCRIPTION */}
      <div className="md:row-start-1">
        <CrewDescription data={data} crewData={crewData} />
      </div>
    </section>
  );
};

export default CrewPage;
