"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { once } from "events";

const CircleButton = ({ text }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, scale: [0.5, 1] },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 1, type: "spring", stiffness: 100 }}
      className="ml-auto mr-auto rounded-[50%] bg-[#d78e4c] w-fit p-2 pl-4 pr-4 text-white"
    >
      {text}
    </motion.div>
  );
};

const SmallButton = ({ text }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <motion.small
      ref={ref}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, scale: [0.5, 1] },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 1, delay: 0.25, type: "spring", stiffness: 100 }}
      className="font-medium"
    >
      {text}
    </motion.small>
  );
};

const AnimatedComponent = ({
  text,
  delay,
  className,
  bgColor,
  initialLeft,
  finalLeft,
  isSmallFirst,
}: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  const bottomValue = isSmallFirst ? "bottom-11" : "bottom-2";

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, ...(initialLeft ? { left: initialLeft } : {}) },
        visible: {
          opacity: 1,
          scale: [1],
          ...(finalLeft ? { left: finalLeft } : {}),
        },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 2, delay, type: "spring", stiffness: 100 }}
      className={`relative ${bottomValue} ${className || ""}`}
    >
      {isSmallFirst ? (
        <>
          <small className={`p-3 text-white ${bgColor || ""} rounded-xl`}>
            {text}
          </small>
          <div
            className={`w-[15px] h-[15px] rounded-[50%] ${bgColor || ""} mt-3`}
          ></div>
        </>
      ) : (
        <>
          <div
            className={`w-[15px] h-[15px] rounded-[50%] ${bgColor || ""} mb-3`}
          ></div>
          <small className={`p-3 text-white ${bgColor || ""} rounded-xl`}>
            {text}
          </small>
        </>
      )}
    </motion.div>
  );
};

const Social_skills = () => {
  return (
    <div className="w-[80%] bg-[#edf8fe] ml-auto mr-auto p-16 text-center rounded-2xl">
      <p className="font-medium text-[18px]">
        Let your friends, family and co-workers (anonymously) rate your social
        skills.
      </p>
      <h1 className="text-[45px] font-bold pb-20">
        Ever wondered what others think of you?
      </h1>
      <div className="ml-auto mr-auto w-[58%] border-2 border-dashed border-[#e8c079]"></div>
      <div className="ml-auto mr-auto flex justify-between w-[80%] relative bottom-5">
        <div>
          <CircleButton text="1" />
          <SmallButton text="Answer questions on your social skills" />
        </div>
        <div>
          <CircleButton text="2" />
          <SmallButton text="Let others anonymously answer the same <br/> questions about you" />
        </div>
        <div>
          <CircleButton text="3" />
          <SmallButton text="Find out where you and others see things <br/> the same way - and where not!" />
        </div>
      </div>
      <div className="ml-auto mr-auto w-[55%] h-[200px] bg-white rounded-xl flex flex-col justify-center pt-10 mt-14 mb-4 shadow-lg shadow-gray-500/50">
        <div className="ml-auto mr-auto w-[88%] border-2 border-solid border-gray"></div>
        <div className="flex justify-between ml-auto mr-auto w-[90%]">
          <AnimatedComponent
            text="You"
            delay={0.5}
            className=""
            initialLeft="1%"
            finalLeft="0%"
            bgColor="bg-[#6341ea]"
            control=""
            isSmallFirst={true}
          />
          <AnimatedComponent
            text="Anonymonos 1"
            delay={0.65}
            className=""
            initialLeft="20%"
            finalLeft="10%"
            bgColor="bg-[#3dc5fb]"
            control={[25, 0]}
            isSmallFirst={false}
          />
          <AnimatedComponent
            text="Anonymonos 2"
            delay={0.8}
            className=""
            initialLeft="25%"
            finalLeft="10%"
            bgColor="bg-[#fdb337]"
            control={[30, 0]}
            isSmallFirst={true}
          />
          <AnimatedComponent
            text="Anonymonos 3"
            delay={0.95}
            className=""
            initialLeft="30%"
            finalLeft="18%"
            bgColor="bg-[#58c895]"
            control={[45, 0]}
            isSmallFirst={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Social_skills;
