import React from "react";
import feelBetterWithVolant from "./feel-better-wite-volant.png";
import "./FeelBetter.css";
import guest from "./guest.png";
import alife from "./removech.png";
import soyou from "./soyou.png";

const FeelBetter = () => {
  return (
    <div>
      <div className="w-[90%] mx-auto mt-12">
        {/* FEEL BETTER WITH VOLANT */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center ">
          <div className="mb-12 md:mb-0">
            <img
              className="object-cover object-center w-full lg:px-0"
              alt="hero"
              src={feelBetterWithVolant}
            />
          </div>
          <div className="px-4 lg:px-8">
            <h1 className="feel-better-title text-xl lg:text-[32px] mb-4 md:mb-2 lg:mb-12 ">
              Feel better with volant
            </h1>
            <p className="mb-8 md:mb-8 lg:mb-16 feel-better-para text-lg lg:text-[22px]">
              Designed to perfectly infuse your indoor space with essential oil
              scents to help you feel more energy, focus, and calm at the touch
              of a button.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex justify-center items-center h-[32px] lg:h-[45px] text-[20px] lg:text-[24px] feel-better-btn feel-better-btn-font border-0 focus:outline-none rounded ">
                Get 50% off
              </button>
            </div>
          </div>
        </div>

        {/* A LIFE WITHOUT CHEMICALS */}
        <div className="w-[90%] mx-auto mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center ">
            <div className="px-4 lg:px-8 order-last md:order-none">
              <h1 className="feel-better-title text-xl lg:text-[32px] mb-4 md:mb-2 lg:mb-12 ">
                A life without chemicals
              </h1>
              <p className="mb-8 md:mb-8 lg:mb-16 feel-better-para text-lg lg:text-[22px]">
                An average scented candle burns chemicals for 35 hours. One
                bottle of Volant Essential Oil scents your home for 200+ hours
                with a 100% natural and fresh aroma.
              </p>
              <div className="flex justify-center ">
                <button className="inline-flex justify-center items-center h-[32px] lg:h-[45px] text-[20px] lg:text-[24px] feel-better-btn feel-better-btn-font border-0 focus:outline-none rounded ">
                  Get 50% off
                </button>
              </div>
            </div>
            <div className="mb-12 md:mb-0">
              <img
                className="object-cover object-center w-full lg:px-0"
                alt="hero"
                src={alife}
              />
            </div>
          </div>
        </div>
        {/* SO YOU CAN FEEL BETTER   */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-16">
          <div className="mb-12 md:mb-0">
            <img
              className="object-cover object-center w-full lg:px-0"
              alt="hero"
              src={soyou}
            />
          </div>
          <div className="px-4 lg:px-8">
            <h1 className="soyou-font text-2xl lg:text-[45px] mb-4 md:mb-2 lg:mb-12 ">
              so you can feel <br /> better
            </h1>
          </div>
        </div>

        {/* AND YOUR GUESTS SECTION */}
        <div className="w-[90%] mx-auto mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center ">
            <div className="px-4  lg:px-8 order-last md:order-none ">
              <h1 className="soyou-font text-2xl lg:text-[45px] mb-4 md:mb-2 lg:mb-12 ">
                And your guests can enjoy the luxurious smell of your home.
              </h1>
            </div>
            <div className="mb-12 md:mb-0">
              <img
                className="object-cover object-center w-full lg:px-0"
                alt="hero"
                src={guest}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeelBetter;
