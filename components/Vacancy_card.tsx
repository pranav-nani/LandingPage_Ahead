import React, { useState } from "react";
import { motion } from "framer-motion";

interface VacancyCardProps {
  heading: string;
  one: string;
  two: string;
  three: string;
}

const VacancyCard: React.FC<VacancyCardProps> = (props) => {
  const [showButton, setShowButton] = React.useState(false);
  const buttonVariants = {
    hidden: {
      opacity: 0,
      bottom: 10,
      transition: { duration: 0.5 },
    },
    visible: {
      opacity: 1,
      bottom: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="p-7 bg-[#fefbec] w-fit rounded-xl h-[175px]"
      onMouseEnter={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(false)}
      whileHover={{ height: 225 }}
    >
      <p className="font-bold text-[18px]">{props.heading}</p>
      <ul
        className="ml-3 font-medium text-[14px]"
        style={{ listStyleType: "disc" }}
      >
        <li className="pt-3">{props.one}</li>
        <li className="pt-3">{props.two}</li>
        <li className="pt-3">{props.three}</li>
      </ul>
      <motion.button
        className="text-white bg-black focus:outline-none focus:ring-4 font-bold rounded-full text-sm px-5 py-2 text-center mr-2 mt-3 relative bottom-7"
        variants={buttonVariants}
        animate={showButton ? "visible" : "hidden"}
      >
        See details
      </motion.button>
    </motion.div>
  );
};

export default VacancyCard;
