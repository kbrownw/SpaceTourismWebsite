import { Link } from "react-router-dom";
import { SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  return (
    <motion.section
      key="home-page"
      className="flex flex-col min-h-fit items-center mx-auto mt-[108px] gap-24 pb-24 w-5/6  md:w-3/5 lg:flex-row lg:w-full lg:gap-[25%] lg:mt-[200px] lg:pl-36 lg:mx-0"
    >
      {/* TEXT SECTION */}
      <div className="flex flex-col basis-1/2 gap-6 text-center lg:max-w-[445px] lg:text-left">
        <h5 className="text-light-violet">SO, YOU WANT TO TRAVEL TO</h5>
        <h1>SPACE</h1>
        <p className=" text-light-violet">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      {/* EXPLORE */}
      <motion.div
        initial="rest"
        whileHover="hover"
        whileTap="hover"
        animate="rest"
        className="relative w-[274px] h-[274px] rounded-full lg:mt-16"
      >
        <motion.div
          variants={{
            rest: { scale: 1 },
            hover: { scale: 2, transition: { duration: 0.2 } },
          }}
          className="flex items-center justify-center absolute w-[274px] h-[274px] bg-white/10 rounded-full"
        ></motion.div>
        <Link
          to={`/${SelectedPage.Destination}`}
          className="flex items-center justify-center absolute w-[274px] h-[274px] bg-white rounded-full z-[1]"
          onClick={() => setSelectedPage(SelectedPage.Destination)}
        >
          <h4 className="text-black">EXPLORE</h4>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default Home;
