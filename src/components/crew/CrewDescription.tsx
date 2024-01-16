import { Crew } from "../../shared/types";
import { AnimatePresence, motion } from "framer-motion";
import { container, child } from "../../shared/animations";

type Props = {
  data: Crew[];
  crewData: Crew;
};

const CrewDescription = ({ data, crewData }: Props) => {
  const descriptions = Object.values(data).map((description) => {
    return (
      <motion.article
        variants={container}
        initial="hidden"
        animate="show"
        exit="leave"
        key={`${description.name}`}
        className="text-center mx-auto w-5/6 my-5 md:w-2/3 md:mt-16 lg:text-left lg:mt-36 lg:ml-28 lg:min-h-[350px]"
      >
        <motion.div variants={child}>
          <h4 className="text-[20px] opacity-50 md:text-[28px]">
            {description.role.toUpperCase()}
          </h4>
        </motion.div>

        <motion.h4
          variants={child}
          className="text-[28px] animate-item md:text-[44px]"
        >
          {description.name.toUpperCase()}
        </motion.h4>
        <motion.p variants={child} className="text-light-violet mt-5">
          {description.bio}
        </motion.p>
      </motion.article>
    );
  });

  return (
    <AnimatePresence mode="wait">
      {crewData.name === data[0].name && descriptions[0]}
      {crewData.name === data[1].name && descriptions[1]}
      {crewData.name === data[2].name && descriptions[2]}
      {crewData.name === data[3].name && descriptions[3]}
    </AnimatePresence>
  );
};

export default CrewDescription;
