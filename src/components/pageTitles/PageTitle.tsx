import { motion } from "framer-motion";

type Props = {
  number: string;
  title: string;
};

const PageTitle = ({ number, title }: Props) => {
  return (
    <motion.h5
      key={`page-${number}-title`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="w-5/6 text-[24px] text-center mx-auto md:mx-14 md:text-left md:mt-10 lg:mx-28"
    >
      <span className="opacity-25 font-bold">{number}</span>
      {` ${title}`}
    </motion.h5>
  );
};

export default PageTitle;
