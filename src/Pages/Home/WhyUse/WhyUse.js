import React from "react";
import "./WhyUse.css";

const WhyUse = () => {
  return (
    <div>
      <div className="flex justify-center items-center my-28">
        <div className="w-2/5">
          <div className="px-4 lg:px-8">
            <h1 className="why-use-title text-xl lg:text-[32px] mb-4 md:mb-2 lg:mb-12 ">
              Why use a volant diffuser?
            </h1>
            <p className="mb-8 md:mb-8 lg:mb-16 feel-better-para text-lg lg:text-[22px]">
              Our technology helps you bring nature's rich benefits into your
              home, office or anywhere you desire. If you need more sleep,
              energy or focus, our diffuser and essential oil blends are the
              solution.
            </p>
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

export default WhyUse;
