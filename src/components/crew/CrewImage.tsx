import { motion } from "framer-motion";

type Props = {
  source: string;
  alt: string;
};

const CrewImage = ({ source, alt }: Props) => {
  return (
    <motion.div className="h-[222px] mx-auto mt-10 mb-0 md:row-start-3 md:h-[532px] lg:row-start-1 lg:col-start-2">
      <img className="w-full h-full" src={source} alt={alt} />
    </motion.div>
  );
};

export default CrewImage;
