import { AnimatePresence, motion } from "framer-motion";
import { Destinations } from "../../shared/types";

type Props = {
  data: Destinations[];
  preLoadSrcList: string[];
  celestialBody: Destinations;
};

const DestinationImage = ({ data, preLoadSrcList, celestialBody }: Props) => {
  const images = Object.values(data).map((item, index) => {
    return (
      <motion.img
        alt={`${item.name}-image`}
        src={preLoadSrcList[index]}
        className="w-full h-full max-w-[450px]"
        key={`${item.name}-picture`}
        initial={{ scale: 0.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.1, opacity: 0 }}
        transition={{ duration: 0.3 }}
      />
    );
  });

  return (
    <AnimatePresence mode="wait">
      {celestialBody.name === data[0].name && images[0]}
      {celestialBody.name === data[1].name && images[1]}
      {celestialBody.name === data[2].name && images[2]}
      {celestialBody.name === data[3].name && images[3]}
    </AnimatePresence>
  );
};

export default DestinationImage;
