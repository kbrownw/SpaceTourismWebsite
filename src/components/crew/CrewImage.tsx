import { motion } from "framer-motion";

type Props = {
  source: string;
  alt: string;
};

const CrewImage = ({ source, alt }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="h-[275px] mx-auto mt-10 mb-0 md:row-start-3 md:h-[532px] lg:row-span-2 lg:col-start-2 lg:h-[654px] lg:mt-0 lg:absolute lg:top-14"
    >
      <img className="w-full h-full" src={source} alt={alt} />
    </motion.div>
  );
};

export default CrewImage;
