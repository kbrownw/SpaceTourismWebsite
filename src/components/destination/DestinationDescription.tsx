import { Destinations } from "../../shared/types";
import { AnimatePresence, motion } from "framer-motion";
import { container, child } from "../../shared/animations";

type Props = {
  data: Destinations[];
  celestialBody: Destinations;
};

const DestinationDescription = ({ data, celestialBody }: Props) => {
  const descriptions = Object.values(data).map((item) => {
    return (
      <motion.article
        variants={container}
        initial="hidden"
        animate="show"
        exit="leave"
        key={`${item.name}-description`}
        className="flex flex-col h-[500px] align-top text-center gap-5 md:h-[400px] lg:h-auto lg:items-start lg:text-left"
      >
        {/* PLANET NAME */}
        <motion.h3 variants={child} className="lg:text-[100px]">
          {item.name.toUpperCase()}
        </motion.h3>
        {/* PLANET DESCRIPTION */}
        <motion.p
          variants={child}
          className=" text-light-violet line leading-[25px]"
        >
          {item.description}
        </motion.p>
        <motion.div variants={child} className="w-full h-full">
          <hr className="opacity-[0.2515] my-8 lg:w-full" />
        </motion.div>

        <div className="text-center md:flex md:justify-around lg:gap-24 lg:text-left">
          {/* DISTANCE FROM EARTH */}
          <motion.div variants={child} className="celestial-ite">
            <h5 className="text-light-violet text-[18px]">AVG. DISTANCE</h5>
            <h4>{item.distance}</h4>
          </motion.div>

          {/* TRAVEL TIME */}
          <motion.div variants={child} className="pt-5 md:pt-0">
            <h5 className="text-light-violet text-[18px]">EST. TRAVEL TIME</h5>
            <h4>{item.travel}</h4>
          </motion.div>
        </div>
      </motion.article>
    );
  });

  return (
    <AnimatePresence mode="wait">
      {celestialBody.name === data[0].name && descriptions[0]}
      {celestialBody.name === data[1].name && descriptions[1]}
      {celestialBody.name === data[2].name && descriptions[2]}
      {celestialBody.name === data[3].name && descriptions[3]}
    </AnimatePresence>
  );
};

export default DestinationDescription;
