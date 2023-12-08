"use client";
import {
  useScroll,
  useTransform,
  motion,
  useInView,
  useAnimation,
} from "framer-motion";
import React, { useRef, useEffect } from "react";
import { ImprovementData } from "./data";

interface ImprovementProps {
  head: string;
  text: string;
}

function createCard(content: any) {
  return <Template key={content.key} head={content.head} text={content.text} />;
}

const Template: React.FC<ImprovementProps> = (props) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0.8", "1 0.5"],
  });
  const y = useTransform(scrollYProgress, [0, 0.9, 1.25], [1, 1.05, 1]);
  const z = useTransform(scrollYProgress, [0, 0.9, 1.25], [1, 1.5, 1]);
  const opacityValue = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.5, 1, 0.5]
  );

  return (
    <motion.div ref={ref} style={{ opacity: opacityValue }}>
      <div className="flex">
        <motion.div
          ref={ref}
          style={{ scale: z }}
          className="w-2 h-2 rounded-2xl bg-[#7559f1] relative right-[17px]"
        ></motion.div>
        <motion.p
          ref={ref}
          style={{ scale: y }}
          className="text-[20px] font-bold"
        >
          {props.head}
        </motion.p>
      </div>
      <motion.p
        ref={ref}
        style={{ scale: y }}
        className="font-medium ml-3 pb-7 pt-2"
      >
        {props.text}
      </motion.p>
    </motion.div>
  );
};

const Self_improvement = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <div className="p-16 w-[75%] ml-auto mr-auto mt-28 mb-28">
      <motion.p
        ref={ref}
        variants={{
          hidden: { opacity: 0, right: 150 },
          visible: { opacity: 1, left: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 1.5,
          delay: 0.25,
        }}
        className="text-[50px] font-bold pb-10 relative"
      >
        <span className="block text-[18px] font-medium">
          Wrong with self-improvement & how we are fixing it
        </span>
        Self-improvement. Ugh.
      </motion.p>
      <div className="flex justify-center">
        <div className="bg-[#7559f1] w-[2px] mr-3"></div>
        <div className="flex flex-col w-[55%]">
          {ImprovementData.map(createCard)}
        </div>
      </div>
    </div>
  );
};

export default Self_improvement;
