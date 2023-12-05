import React from "react";

interface RandomCardProps {
  left: string;
  middle: string;
  right: string;
}

const Random: React.FC<RandomCardProps> = (props) => {
  return (
    <div className="w-[70%] p-7 flex justify-between items-start ml-auto mr-auto">
      <p className="font-bold text-[24px] w-[20%]">{props.left}</p>
      <p className="font-medium w-[27%] text-[#3b3d3e]">{props.middle}</p>
      <p className="font-medium w-[27%] text-[#3b3d3e]">{props.right}</p>
    </div>
  );
};

export default Random;
