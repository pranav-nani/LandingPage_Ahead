"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import "../public/styles/typewriting.css";

const AnimatedText = ({ text, delay, className }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <motion.p
      ref={ref}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, scale: [1], top: [75, 0] },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 1, delay, type: "spring", stiffness: 100 }}
      className={`relative ${className || ""}`}
    >
      {text}
    </motion.p>
  );
};

const Privacy = () => {
  return (
    <div className="flex flex-col items-center w-[50%] ml-auto mr-auto pt-20 pb-20 relative mt-28 mb-28">
      <AnimatedText
        text="We take privacy seriously"
        delay={0.25}
        className="font-medium text-[18px] pb-5"
      />
      <AnimatedText
        text="Before you get started"
        delay={0.35}
        className="font-bold text-3xl pb-5"
      />
      <AnimatedText
        text="We won't share your answers with anyone (and won't ever tell you which friends said what about you)"
        delay={0.45}
        className="font-medium text-gray-700 w-[80%] text-[20px] text-center pb-8"
      />
      <div className="flex">
        <AnimatedText text="with love," delay={0.55} className="pb-8 inline" />
        <div className="w-fit inline">
          <AnimatedText
            text=" Anil Kumar"
            delay={0.55}
            className="pb-8 typewriter font-cursive"
          />
        </div>
      </div>
      <button>
        <AnimatedText
          text="Start a test"
          delay={0.75}
          className="text-white bg-black focus:outline-none focus:ring-4 font-bold rounded-full text-sm px-5 py-4 text-center mr-2 mb-3"
        />
      </button>
      <AnimatedText
        text="Take only 5 minutes"
        delay={0.85}
        className="text-[14px] text-gray-500"
      />
    </div>
  );
};

export default Privacy;
