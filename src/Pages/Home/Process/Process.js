import React from "react";
import processBg from "./process-bg.png";
import "./Process.css";

const Process = () => {
  return (
    <div>
      <div className="relative overflow-hidden h-screen mb-12">
        <img
          src={processBg}
          className="absolute w-full h-full object-cover"
          alt=""
        />
        <div className="inset-0 bg-black opacity-25 absolute"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center top-[50%]">
          <div className="lg:w-3/5 xl:w-2/5 flex flex-col items-start relative z-10">
            <p className="process-para">
              <span className="font-bold">This process</span> creates a fine
              mist of aroma that scents your entire space, naturally and
              effectively
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
