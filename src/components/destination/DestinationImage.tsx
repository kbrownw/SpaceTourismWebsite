import { motion } from "framer-motion";

type Props = {
  source: string;
  alt: string;
};

const DestinationImage = ({ source, alt }: Props) => {
  return (
    <>
      <motion.img
        alt={alt}
        src={source}
        className="w-full h-full max-w-[450px]"
        key={alt}
        initial={{ scale: 0.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.1, opacity: 0 }}
        transition={{ duration: 0.5 }}
      />
    </>
  );
};

export default DestinationImage;
