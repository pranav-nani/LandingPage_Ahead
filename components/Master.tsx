"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";

const Master = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div className="flex mt-6 py-6 lg:py-20 px-0 bg-[#eeebfe] w-[80%] ml-auto mr-auto rounded-xl relative">
      <div className="ml-auto mr-auto w-[80%] md:flex justify-between">
        <div className="md:w-[40%] pt-20 pb-20">
          <motion.div
            ref={ref}
            variants={{
              hidden: { opacity: 0, right: 100 },
              visible: { opacity: 1, right: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1 }}
            className="relative"
          >
            <p>Ahead app</p>
            <p className="font-bold lg:text-[50px] leading-none py-4">
              Master your life by mastering emotions
            </p>
          </motion.div>
          <Image
            src="/apple-store.png"
            alt="App store"
            className="pt-4"
            width={150}
            height={10}
          />
        </div>
        <div className="ml-[65px] md:w-[45%]">
          <div className="border-2 w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[500px] rounded-full relative right-16 border-dashed border-white flex justify-center items-center">
            <div className="bg-[#d6ccef] w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[350px] lg:h-[350px] rounded-full flex justify-center items-center">
              <div className="border-black border-4 rounded-2xl w-[100px] h-[200px] lg:w-[200px] lg:h-[400px] overflow-hidden">
                <Image
                  src={"/Phone.png"}
                  alt="Phone"
                  width={200}
                  height={100}
                  style={{ borderRadius: 20 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Master;


// <motion.div
//         ref={ref}
//         variants={{
//           hidden: { opacity: 0,left: 40, rotate: 0 },
//           visible: { opacity: 1, left: 50, top: [60], rotate: 340 },
//         }}
//         initial="hidden"
//         animate={mainControls}
//         transition={{
//           duration: 1,
//           delay: 0.25,
//         }}
//         className="w-[100px] h-[50px] bg-green-300 rounded-t-full absolute right-[20px] bottom-[60px]"
//       ></motion.div>
//       <motion.div
//         ref={ref}
//         variants={{
//           hidden: { opacity: 0, left: [300], rotate: 0 },
//           visible: { opacity: 1, left: [300,350], top: [150], rotate: 390 },
//         }}
//         initial="hidden"
//         animate={mainControls}
//         transition={{
//           duration: 1,
//           delay: 0.25,
//         }}
//         className="w-[50px] h-[23px] bg-green-500 rounded-t-full absolute right-[20px] bottom-[60px]"
//       ></motion.div>
//       <motion.div
//         ref={ref}
//         variants={{
//           hidden: { opacity: 0, left: [300] },
//           visible: { opacity: 1, left: [300,400], top: [120] },
//         }}
//         initial="hidden"
//         animate={mainControls}
//         transition={{
//           duration: 1,
//           delay: 0.25,
//         }}
//         className="w-[30px] h-[30px] rounded-full bg-[#f3c9c8] absolute right-[10px] bottom-[120px]"
//       ></motion.div>
//       <motion.div
//         ref={ref}
//         variants={{
//           hidden: { opacity: 0, right: 5 },
//           visible: { opacity: 1, right: 10, bottom: [120] },
//         }}
//         initial="hidden"
//         animate={mainControls}
//         transition={{
//           duration: 1,
//           delay: 0.25,
//         }}
//         className="w-[30px] h-[30px] rounded-full bg-[#f3c9c8] absolute right-[10px] bottom-[120px]"
//       ></motion.div>
//       <motion.div
//         ref={ref}
//         variants={{
//           hidden: { opacity: 0, left: [300] },
//           visible: { opacity: 1, left: [300,450], top: [80] },
//         }}
//         initial="hidden"
//         animate={mainControls}
//         transition={{
//           duration: 1,
//           delay: 0.25,
//         }}
//         className="w-[40px] h-[40px] rounded-full bg-[#fae8dc] flex justify-center items-center absolute right-[50px] bottom-0"
//       >
//         <div className="w-[15px] h-[15px] rounded-full bg-[#eb695b]"></div>
//       </motion.div>