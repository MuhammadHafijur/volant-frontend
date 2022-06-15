import React from "react";
import founder from "./founder.png";
import "./OurFounder.css";

const OurFounder = () => {
  return (
    <div>
      <div className="w-[90%] mx-auto mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center ">
          <div className="mb-12 md:mb-0">
            <img
              className="object-cover object-center w-full lg:px-0"
              alt="hero"
              src={founder}
            />
          </div>
          <div className="px-4 lg:px-8">
            <h1 className="feel-better-title text-xl lg:text-[32px] mb-4 md:mb-2 lg:mb-12 ">
              Our founder
            </h1>
            <p className="mb-8 md:mb-8 lg:mb-8 feel-better-para text-lg lg:text-[22px]">
              "I had just refurbished my apartment in Oslo and wanted a diffuser
              that went well with my Scandinavian style. I couldn't find one, so
              I made one."
            </p>
            <div className="mb-8">
              <h1 className="founder-name mb-1">Daniel Hoftun</h1>
              <h1 className="founder-title">Volant Founder</h1>
            </div>
            <div className="flex justify-center">
              <button className="inline-flex justify-center items-center h-[32px] lg:h-[45px] text-[20px] lg:text-[24px] feel-better-btn feel-better-btn-font border-0 focus:outline-none rounded ">
                Get 50% off
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFounder;
