import { Technology } from "../../shared/types";
import { motion } from "framer-motion";

type Props = {
  data: Technology[];
  selectedTech: Technology;
  setSelectedTech: (value: Technology) => void;
};

const TechnologySelector = ({ data, selectedTech, setSelectedTech }: Props) => {
  const buttonStyle =
    "rounded-full w-[60px] h-[60px] text-[28px] border-white/25 border-2 transition duration-500 lg:w-[80px] lg:h-[80px] lg:text-[38px] hover:border-white";
  const selectedStyle = "bg-white text-black border-white";
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex mx-auto my-7 gap-5 md:my-16 lg:flex-col lg:row-start-1 lg:self-center lg:mx-0 lg:gap-10"
    >
      <button
        className={`${buttonStyle} ${
          selectedTech === data[0] && selectedStyle
        }`}
        onClick={() => {
          setSelectedTech(data[0]);
        }}
      >
        1
      </button>
      <button
        className={`${buttonStyle} ${
          selectedTech === data[1] && selectedStyle
        }`}
        onClick={() => {
          setSelectedTech(data[1]);
        }}
      >
        2
      </button>
      <button
        className={`${buttonStyle} ${
          selectedTech === data[2] && selectedStyle
        }`}
        onClick={() => {
          setSelectedTech(data[2]);
        }}
      >
        3
      </button>
    </motion.div>
  );
};

export default TechnologySelector;
