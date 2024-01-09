import { motion } from "framer-motion";
import { Destinations } from "../../shared/types";
import { useEffect, useState } from "react";
import Planets from "./Planets";

interface Props {
  data: Destinations[];
}

function Destination({ data }: Props) {
  const moonData = data[0];
  const marsData = data[1];
  const europaData = data[2];
  const titanData = data[3];
  const [planet, setPlanet] = useState<Destinations>(moonData);

  useEffect(() => {
    console.log(moonData);
  });

  return (
    <motion.section
      key="destination-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-center items-center w-5/6 mt-5 mx-auto"
    >
      {/* TITLE */}
      <h5 className="text-[24px]">
        <span className="opacity-25 font-bold">01</span> PICK YOUR DESTINATION
      </h5>
      {/* IMAGE */}
      <div className="max-w-1/2">
        <img />
      </div>
      {/* DATA SELECTION MENU */}
      <div className="flex mx-auto gap-5">
        <button>
          <h5 className="text-[22px]">MOON</h5>
        </button>
        <button>
          <h5 className="text-[22px]">MARS</h5>
        </button>
        <button>
          <h5 className="text-[22px]">EUROPA</h5>
        </button>
        <button>
          <h5 className="text-[22px]">TITAN</h5>
        </button>
      </div>
      {/* PLANET NAME */}
      <h3>{planet.name.toUpperCase()}</h3>
      {/* PLANET DESCRIPTION */}
      {/* DISTANCE FROM EARTH */}
      {/* TRAVEL TIME */}
    </motion.section>
  );
}

export default Destination;
