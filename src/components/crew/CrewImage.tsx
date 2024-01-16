import { AnimatePresence, motion } from "framer-motion";
import { Crew } from "../../shared/types";

type Props = {
  data: Crew[];
  crewData: Crew;
  preLoadSrcList: string[];
};

const CrewImage = ({ data, crewData, preLoadSrcList }: Props) => {
  const images = Object.values(data).map((image, index) => {
    return (
      <motion.div
        key={`${image.name}${index}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="h-[275px] mx-auto mt-10 mb-0 md:row-start-3 md:h-[532px] lg:row-span-2 lg:col-start-2 lg:h-[700px] lg:mt-0 lg:absolute lg:top-2"
      >
        <img
          className="w-full h-full"
          src={preLoadSrcList[index]}
          alt={`${image.name}-image`}
        />
      </motion.div>
    );
  });

  return (
    <AnimatePresence mode="wait">
      {crewData.name === data[0].name && images[0]}
      {crewData.name === data[1].name && images[1]}
      {crewData.name === data[2].name && images[2]}
      {crewData.name === data[3].name && images[3]}
    </AnimatePresence>
  );
};

export default CrewImage;
