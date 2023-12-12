"use client";
import React, { useRef, useEffect } from "react";
import { vacancyData } from "./data";
import Vacancy_card from "@/components/Vacancy_card";
import { motion, useAnimation, useInView } from "framer-motion";

const Vacancies = () => {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });
  const mainController = useAnimation();
  useEffect(() => {
    if (isInview) {
      mainController.start("visible");
    }
  }, [isInview]);
  return (
    <div className="w-[70%] ml-auto mr-auto pt-20 pb-20 mt-28">
      <motion.p
        ref={ref}
        variants={{
          hidden: { opacity: 0, right: 50 },
          visible: { opacity: 1, right: 0 },
        }}
        initial="hidden"
        animate={mainController}
        transition={{
          duration: 1,
          delay: 0.25,
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        className="text-[50px] font-bold pb-10 relative"
      >
        Open vacanies
      </motion.p>
      <div className="flex justify-between">
        {vacancyData.map((content, index) => (
          <Vacancy_card
            key={index}
            heading={content.heading}
            one={content.one}
            two={content.two}
            three={content.three}
          />
        ))}
      </div>
    </div>
  );
};

export default Vacancies;
