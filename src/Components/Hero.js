import React from "react";

const Hero = () => {
  return (
    <div className="w-full   bg-zinc-200">
      <div className="grid py-7 grid-cols-2 md:grid-cols-1 max-w-[1200px] m-auto px-5 items-center">
        <div className="w-full md:mb-14 md:text-center">
          <p className="text-2xl font-semibold ">
            Unique Sequencing & Production
          </p>
          <h1 className="text-6xl md:text-4xl sm:text-3xl my-4 font-bold ">
            Cloud <br></br> Management
          </h1>
          <p className="text-2xl font-semibold">This is our Tech brand.</p>
          <button className="py-2 text-1xl md:py-3 mt-5  w-[60%]">
            Get Started
          </button>
        </div>
        <img src="https://raw.githubusercontent.com/fireclint/cloud-app-react/main/src/assets/cyber-bg.png" />
      </div>
    </div>
  );
};

export default Hero;
