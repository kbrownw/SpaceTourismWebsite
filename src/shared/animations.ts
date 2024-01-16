export const container = {
  hidden: { opacity: 0, x: "200px" },
  show: {
    opacity: 1,
    x: "0",
    transition: {
      duration: 0.3,
      staggerChildren: 0.1,
    },
  },
  leave: { opacity: 0, x: "-100px", transition: { duration: 0.2 } },
};

export const child = {
  hidden: { opacity: 0, x: "200px" },
  show: { opacity: 1, x: "0" },
};
