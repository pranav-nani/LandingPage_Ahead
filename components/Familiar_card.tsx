"use client"
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface FamiliarCardProps {
  emoji: string;
  head: string;
  text: string;
}

const Familiar_card: React.FC<FamiliarCardProps> = (props) => {
  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });
  // const mainControls = useAnimation();
  // useEffect(() => {
  //   if (isInView) {
  //     mainControls.start("visible");
  //   }
  // }, [isInView]);
  return (
    <motion.div
      // ref={ref}
      // variants={{
      //   hidden: { opacity: 0, left:1000 },
      //   visible: { opacity: 1, left:0 },
      // }}
      // initial="hidden"
      // animate={mainControls}
      // transition={{ duration: 1, delay: 0.25 }}
      className="p-7 bg-[#eeebfe] w-[320px]  rounded-xl relative"
    >
      <p className="text-[30px] pt-2 pb-2">{props.emoji}</p>
      <p className="font-bold relative left-1">{props.head}</p>
      <small className="relative left-1">{props.text}</small>
    </motion.div>
  );
};

export default Familiar_card;
