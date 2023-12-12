"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Meet = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);
  return (
    <div className="bg-[#fef7f1] w-[70%] ml-auto mr-auto mt-28 p-16 pt-28 pb-28 rounded-2xl overflow-hidden">
      <motion.p
        ref={ref}
        variants={{
          hidden: { opacity: 0, right: 150 },
          visible: { opacity: 1, left: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 1,
          delay: 0.25,
        }}
        className="text-[50px] font-bold pb-10 relative"
      >
        <span className="block text-[18px] font-medium">
          Built out of frustation
        </span>
        Meet the ahead app
      </motion.p>
      <div className="flex justify-between items-center">
        <div className="w-[45%] relative">
          <motion.div
            ref={ref}
            variants={{
              hidden: { opacity: 0, right: 25 },
              visible: { opacity: 1, right: 50, bottom: [0, -5, 0] },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{
              duration: 1,
              delay: 0.25,
            }}
            className="w-[40px] h-[40px] rounded-full bg-[#fae8dc] flex justify-center items-center absolute right-[50px] bottom-0"
          >
            <div className="w-[15px] h-[15px] rounded-full bg-[#eb695b]"></div>
          </motion.div>
          <motion.div
            ref={ref}
            variants={{
              hidden: { opacity: 0, right: 5 },
              visible: { opacity: 1, right: 10, bottom: [120] },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{
              duration: 1,
              delay: 0.25,
            }}
            className="w-[30px] h-[30px] rounded-full bg-[#f3c9c8] absolute right-[10px] bottom-[120px]"
          ></motion.div>
          <motion.div
            ref={ref}
            variants={{
              hidden: { opacity: 0, right: 10, rotate: 0 },
              visible: { opacity: 1, right: 20, bottom: [60], rotate: 360 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{
              duration: 1,
              delay: 0.25,
            }}
            className="w-[50px] h-[23px] bg-green-500 rounded-t-full absolute right-[20px] bottom-[60px]"
          ></motion.div>
          <motion.div
            ref={ref}
            variants={{
              hidden: { opacity: 0, rotate: 0 },
              visible: { opacity: 1, left: [50], rotate: [45, -45, 0] },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{
              duration: 2,
              delay: 0.25,
            }}
            className="w-[200px] h-[200px] rounded-full flex justify-center items-center bg-white border-[20px] relative z-20"
          >
            <Image src="/meet_img.png" alt="doodle" width={100} height={10} />
          </motion.div>
          <motion.div
            ref={ref}
            variants={{
              hidden: { opacity: 0, left: 550 },
              visible: { opacity: 1, left: -150, bottom: [-100, -200, -100] },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{
              duration: 1,
              delay: 0.25,
            }}
            className="w-[275px] h-[275px] rounded-full absolute bg-[#fae8dc] left-[-150px] bottom-[-100px] z-10"
          ></motion.div>
        </div>
        <div className="w-[45%] font-medium">
          <p>
            A personalized pocket coach that provides bite-sized, science-deiven
            tools to boost emotional intelligence.
          </p>
          <br />
          <p>
            Think of it as a pocket cheerleader towards a better, more
            fulfilling.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Meet;
