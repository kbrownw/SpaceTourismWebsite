import LaunchVehiclePortrait from "../../assets/images/technology/image-launch-vehicle-portrait.jpg";
import LaunchVehicleLandscape from "../../assets/images/technology/image-launch-vehicle-landscape.jpg";
import SpaceportPortrait from "../../assets/images/technology/image-spaceport-portrait.jpg";
import SpaceportLandscape from "../../assets/images/technology/image-spaceport-landscape.jpg";
import SpaceCapsulePortrait from "../../assets/images/technology/image-space-capsule-portrait.jpg";
import SpaceCapsuleLandscape from "../../assets/images/technology/image-space-capsule-landscape.jpg";
import { Technology } from "../../shared/types";
import useImagePreloader from "../../hooks/useImagePreloader";
import { motion, AnimatePresence } from "framer-motion";
import { useScreenSizeContext } from "../../context/ScreenSizeContext";

const preloadSrcList: string[] = [
  LaunchVehiclePortrait,
  LaunchVehicleLandscape,
  SpaceportPortrait,
  SpaceportLandscape,
  SpaceCapsulePortrait,
  SpaceCapsuleLandscape,
];

const portraitImages: string[] = [
  LaunchVehiclePortrait,
  SpaceportPortrait,
  SpaceCapsulePortrait,
];

const landscapeImages: string[] = [
  LaunchVehicleLandscape,
  SpaceportLandscape,
  SpaceCapsuleLandscape,
];

type Props = {
  data: Technology[];
  techDataName: Technology["name"];
};

const TechnologyImage = ({ data, techDataName }: Props) => {
  const { imagesPreloaded } = useImagePreloader(preloadSrcList);
  const { isLargeScreen } = useScreenSizeContext();

  const images = Object.values(data).map((image, index) => {
    return (
      <motion.div
        key={`${image.name}-image-element`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.3 } }}
        exit={{ opacity: 0 }}
        className="w-full mt-10 md:mt-20 lg:col-start-3 lg:justify-self-end lg:mt-0 lg:w-[550px]"
      >
        {isLargeScreen ? (
          <img
            className="w-full h-full"
            src={portraitImages[index]}
            alt={`${image.name}-image-portrait`}
          />
        ) : (
          <img
            className="w-full h-full"
            src={landscapeImages[index]}
            alt={`${image.name}-image-portrait`}
          />
        )}
      </motion.div>
    );
  });

  if (!imagesPreloaded) {
    return <></>;
  }

  return (
    <AnimatePresence mode="wait">
      {techDataName === data[0].name && images[0]}
      {techDataName === data[1].name && images[1]}
      {techDataName === data[2].name && images[2]}
    </AnimatePresence>
  );
};

export default TechnologyImage;
