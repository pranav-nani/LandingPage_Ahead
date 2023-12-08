"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface FamiliarCardProps {
  emoji: string;
  head: string;
  text: string;
  num: number;
  bg:string;
}

const Familiar_card: React.FC<FamiliarCardProps> = (props) => {
  const flag = props.num === 2;
  const value = flag ? "-rotate-12" : "rotate-0"
  
  return (
    <motion.div className={`p-7 ${props.bg} w-[320px]  rounded-xl relative ${value}`}>
      <p className="text-[30px] pt-2 pb-2">{props.emoji}</p>
      <p className="font-bold relative left-1">{props.head}</p>
      <small className="relative left-1">{props.text}</small>
    </motion.div>
  );
};

export default Familiar_card;
