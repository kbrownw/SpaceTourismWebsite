import { useContext, useState } from "react";
import AnoushehImage from "../../assets/images/crew/image-anousheh-ansari.png";
import DouglasImage from "../../assets/images/crew/image-douglas-hurley.png";
import MarkImage from "../../assets/images/crew/image-mark-shuttleworth.png";
import VictorImage from "../../assets/images/crew/image-victor-glover.png";
import { Crew, ScreenSize } from "../../shared/types";
import useImagePreloader from "../../hooks/useImagePreloader";
import CrewImage from "./CrewImage";
import {
  ScreenSizeContext,
  useScreenSizeContext,
} from "../../context/ScreenSizeContext";
import CrewSelector from "./CrewSelector";

const preloadSrcList: string[] = [
  AnoushehImage,
  DouglasImage,
  MarkImage,
  VictorImage,
];

type Props = {
  data: Crew[];
};

const CrewPage = ({ data }: Props) => {
  const [currentData, setCurrentData] = useState<Crew[]>(data);
  const douglasData: Crew = data[0];
  const markData: Crew = data[1];
  const victorData: Crew = data[2];
  const anoushehData: Crew = data[3];
  const { imagesPreloaded } = useImagePreloader(preloadSrcList);
  const { isMediumScreen, isLargeScreen } = useScreenSizeContext();
  const [crewData, setCrewData] = useState<Crew>(douglasData);
  const [runAnimate, setRunAnimate] = useState<boolean>(false);

  if (!imagesPreloaded) {
    return <></>;
  }

  return (
    <section className="grid lg:grid-cols-2">
      {/* CREW IMAGE */}
      {crewData.name === douglasData.name && (
        <CrewImage source={DouglasImage} alt="douglas-hurley-image" />
      )}
      {crewData.name === markData.name && (
        <CrewImage source={MarkImage} alt="mark-shuttleworth-image" />
      )}
      {crewData.name === victorData.name && (
        <CrewImage source={VictorImage} alt="victor-glover-image" />
      )}
      {crewData.name === anoushehData.name && (
        <CrewImage source={AnoushehImage} alt="anousheh-ansari-image" />
      )}

      {/* HORIZONTAL RULE */}
      {!isLargeScreen && !isMediumScreen ? (
        <hr className="opacity-[0.2515] w-[90%] mx-auto" />
      ) : null}
      {/* DATA SELECTION */}
      <CrewSelector
        data={data}
        crewData={crewData}
        setCrewData={setCrewData}
        setRunAnimate={setRunAnimate}
      />
      {/*  */}
      {/* CREW DESCRIPTION */}
      <div className="md:row-start-1">
        <h3>CREW DESCRIPTION</h3>
      </div>
    </section>
  );
};

export default CrewPage;
