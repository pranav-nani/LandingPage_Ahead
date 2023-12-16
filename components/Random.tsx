"use client";
import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface RandomCardProps {
  left: string;
  middle: string;
  right: string;
}

const Random: React.FC<RandomCardProps> = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);
  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 1, delay: 0.25, type: "tween" }}
      className="w-[95%] lg:w-[75%] p-7 pt-28 pb-28 flex justify-between items-start ml-auto mr-auto"
    >
      <p className="font-bold text-[24px] w-[20%]">{props.left}</p>
      <p className="font-medium w-[27%] text-[#3b3d3e]">{props.middle}</p>
      <p className="font-medium w-[27%] text-[#3b3d3e]">{props.right}</p>
    </motion.div>
  );
};

export default Random;
