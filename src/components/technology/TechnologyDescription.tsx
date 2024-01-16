import { Technology } from "../../shared/types";
import { AnimatePresence, motion } from "framer-motion";
import { container, child } from "../../shared/animations";

type Props = {
  data: Technology[];
  selectedTech: Technology;
};

const TechnologyDescription = ({ data, selectedTech }: Props) => {
  const descriptions = Object.values(data).map((description) => {
    return (
      <motion.div
        key={`${description.name}-description`}
        variants={container}
        initial="hidden"
        animate="show"
        exit="leave"
        className="text-center w-5/6 h-[300px] mx-auto mt-2 mb-2 md:w-3/5 md:mb-20 lg:text-left lg:w-full lg:mt-0 lg:h-auto"
      >
        {/* Intro */}
        <motion.h4
          variants={child}
          className="animate-item md:text-[48px] lg:text-[64px]"
        >
          {description.name.toUpperCase()}
        </motion.h4>
        <motion.p
          variants={child}
          className="text-light-violet mt-5 animate-item"
        >
          {description.description}
        </motion.p>
      </motion.div>
    );
  });

  return (
    <AnimatePresence mode="wait">
      {selectedTech.name === data[0].name && descriptions[0]}
      {selectedTech.name === data[1].name && descriptions[1]}
      {selectedTech.name === data[2].name && descriptions[2]}
    </AnimatePresence>
  );
};

export default TechnologyDescription;
