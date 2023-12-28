import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center pt-5">
      <Image
        className="ml-[15%]"
        src="/logo.png"
        alt="logo"
        width={50}
        height={10}
      />
      <div className="w-auto ml-[15%] flex item-center invisible xl:visible">
        <div className="flex items-center">
          <p className="pl-6 pr-6 font-medium">Emotions</p>
          <p className="pl-6 pr-6 font-medium">Manifesto</p>
          <p className="pl-6 pr-6 font-medium">Self-awareness Test</p>
          <p className="pl-6 pr-6 font-medium">Work With Us</p>
        </div>
        <button
          type="button"
          className="text-white bg-black focus:outline-none focus:ring-4 font-bold rounded-full text-sm px-5 py-4 text-center ml-24"
        >
          Download App
        </button>
      </div>
    </div>
  );
};

export default Navbar;
