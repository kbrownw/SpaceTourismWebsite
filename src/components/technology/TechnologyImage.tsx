import LaunchVehiclePortrait from "../../assets/images/technology/image-launch-vehicle-portrait.jpg";
import LaunchVehicleLandscape from "../../assets/images/technology/image-launch-vehicle-landscape.jpg";
import SpaceportPortrait from "../../assets/images/technology/image-spaceport-portrait.jpg";
import SpaceportLandscape from "../../assets/images/technology/image-spaceport-landscape.jpg";
import SpaceCapsulePortrait from "../../assets/images/technology/image-space-capsule-portrait.jpg";
import SpaceCapsuleLandscape from "../../assets/images/technology/image-space-capsule-landscape.jpg";
import { TechNames, Technology } from "../../shared/types";
import { useState, useEffect } from "react";
import useImagePreloader from "../../hooks/useImagePreloader";
import { useAnimate } from "framer-motion";
import { useScreenSizeContext } from "../../context/ScreenSizeContext";

const preloadSrcList: string[] = [
  LaunchVehiclePortrait,
  LaunchVehicleLandscape,
  SpaceportPortrait,
  SpaceportLandscape,
  SpaceCapsulePortrait,
  SpaceCapsuleLandscape,
];

type Props = {
  techDataName: Technology["name"];
  runAnimate: boolean;
  setRunAnimate: (value: boolean) => void;
};

const TechnologyImage = ({
  techDataName,
  runAnimate,
  setRunAnimate,
}: Props) => {
  const [currentDataName, setCurrentDataName] =
    useState<Technology["name"]>(techDataName);
  const { imagesPreloaded } = useImagePreloader(preloadSrcList);
  const [scope, animate] = useAnimate();
  const { isMediumScreen, isLargeScreen } = useScreenSizeContext();
  const [source, setSource] = useState<string>("");
  const [altText, setAltText] = useState<string>("");

  const pickImage = (currentDataName: Technology["name"]) => {
    // SELECT CORRENT IMAGE BASED ON SCREEN SIZE AND SELECTED DATA
    if ((isMediumScreen && !isLargeScreen) || !isMediumScreen) {
      if (currentDataName === TechNames.LaunchVehicle) {
        setSource(LaunchVehicleLandscape);
        setAltText(`${LaunchVehicleLandscape} image`);
      }
      if (currentDataName === TechNames.Spaceport) {
        setSource(SpaceportLandscape);
        setAltText(`${SpaceportLandscape} image`);
      }
      if (currentDataName === TechNames.SpaceCapsule) {
        setSource(SpaceCapsuleLandscape);
        setAltText(`${SpaceCapsuleLandscape} image`);
      }
    } else {
      if (currentDataName === TechNames.LaunchVehicle) {
        setSource(LaunchVehiclePortrait);
        setAltText(`${LaunchVehiclePortrait} image`);
      }
      if (currentDataName === TechNames.Spaceport) {
        setSource(SpaceportPortrait);
        setAltText(`${SpaceportPortrait} image`);
      }
      if (currentDataName === TechNames.SpaceCapsule) {
        setSource(SpaceCapsulePortrait);
        setAltText(`${SpaceCapsulePortrait} image`);
      }
    }
  };

  useEffect(() => {
    if (scope.current !== null) {
      // RUN EXIT ANIMATION FOR OLD IMAGE
      if (runAnimate && techDataName !== currentDataName) {
        const exitAnimation = async () => {
          await animate(scope.current, { opacity: 0 }, { duration: 0.3 });
          setCurrentDataName(techDataName);
        };
        exitAnimation();
      }
      setRunAnimate(false);
    }
  }, [runAnimate]);

  useEffect(() => {
    if (scope.current !== null) {
      // CHANGE TO CURRENT PICTURE
      pickImage(currentDataName);
      // RUN ENTRY ANIMATION WHEN IMAGE CHANGES
      scope.current.style.opacity = "0";
      const enterAnimation = async () => {
        await animate(scope.current, { opacity: 0 });
        await animate(scope.current, { opacity: 1 }, { duration: 0.3 });
      };
      enterAnimation();
    }
  }, [currentDataName]);

  useEffect(() => {
    pickImage(currentDataName);
  }, [imagesPreloaded, isMediumScreen, isLargeScreen]);

  if (!imagesPreloaded) {
    return <></>;
  }

  return (
    <div
      ref={scope}
      className="w-full mt-10 md:mt-20 lg:col-start-3 lg:justify-self-end lg:mt-0 lg:w-[550px]"
    >
      <img className="w-full h-full" src={source} alt={altText} />
    </div>
  );
};

export default TechnologyImage;
