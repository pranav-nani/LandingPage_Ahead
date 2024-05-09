"use client";
import React, { useRef, useEffect } from "react";
import Familiar_card from "@/components/Familiar_card";
import { FamiliarData } from "../components/data";
import { motion, useInView, useAnimation } from "framer-motion";

function createCard(content: any) {
  return (
    <Familiar_card
      key={content.key}
      emoji={content.emoji}
      head={content.head}
      text={content.text}
      num={content.num}
      bg={content.bg}
    />
  );
}

const Familiar = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);
  return (
    <div>
      <motion.p
        ref={ref}
        variants={{
          hidden: { opacity: 0, right: 150 },
          visible: { opacity: 1, left: 250 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 1.5,
          delay: 0.25,
        }}
        className="text-[25px] lg:text-[50px] font-bold pb-10 relative"
      >
        Does this sound familiar...
      </motion.p>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, left: 1023 },
          visible: { opacity: 1, left: [500, 50] },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1.5, delay: 0.25 }}
        className=" relative"
      >
        <div className="overflow-hidden w-[100%] grid gap-14 md:grid-flow-col md:grid-rows-2 lg:grid-rows-1">
          {FamiliarData.map(createCard)}
        </div>
      </motion.div>
    </div>
  );
};

export default Familiar;
