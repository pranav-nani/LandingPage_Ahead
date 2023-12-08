"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";

const Footer = () => {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInview) {
      mainControls.start("visible");
    }
  }, [isInview]);
  return (
    <motion.footer
      ref={ref}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, scale: [0.5, 1] },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.75, delay: 0.25 }}
      className="flex items-center flex-col p-10 pb-0"
    >
      <div className="flex items-center flex-col">
        <Image src="/logo.png" alt="logo" width={70} height={10} />
        <p className="font-medium text-[#5832e9] text-[30px]">ahead</p>
      </div>
      <div className="flex w-[25%] justify-between pt-8">
        <span className="flex items-center">
          <span className="p-3 bg-[#9ef1d9] absolute rounded-[50%]"></span>
          <Image
            className="z-10 pl-2"
            src="/location-dot-solid.svg"
            alt="Location"
            width={15}
            height={20}
          />
          <p className="p-3 font-bold text-[10px]">
            AuguststraBe 26, 10117 Berlin
          </p>
        </span>
        <span className="flex items-center">
          <span className="p-3 bg-[#9ef1d9] absolute rounded-[50%]"></span>
          <Image
            className="z-10 pl-2"
            src="/envelope-solid.svg"
            alt="Mail"
            width={15}
            height={20}
          />
          <p className="p-3 font-bold text-[10px]">hi@ahead-app.com</p>
        </span>
      </div>
      <div className="flex items-center flex-col p-8">
        <Image src="/apple-store.png" alt="App store" width={150} height={10} />
        <p className="text-[14px] p-8 text-gray-500">
          @ 2022 Ahead app. All rights reserved
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
