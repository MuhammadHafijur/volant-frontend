import React from "react";
import "./Banner.css";
import banner from "./banner.png";
import play from "./play.png";
import volantPhone from "./volant-phone.png";

const Banner = () => {
  return (
    <div>
      <div className=" relative overflow-hidden h-screen">
        <img
          src={banner}
          className="hidden sm:block absolute h-full w-full md:object-cover"
        />
        <img
          src={volantPhone}
          className="block sm:hidden absolute h-full w-full md:object-cover"
        />
        <div className="inset-0 bg-black opacity-25 absolute"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center md:py-32 xl:py-40">
          <div className="mx-auto md:mx-0 md:ml-auto lg:w-3/5 xl:w-2/5 flex flex-col items-start relative z-10">
            <h1 className="font-semibold headline text-4xl  sm:text-[85px] mx-auto text-white leading-tight mt-4">
              50% OFF
            </h1>
            <p className="text-white font-mulish mx-auto text-lg sm:text-xl my-2">
              Your diffuser when buying 3 oils
            </p>
            <a
              style={{ background: "#DEAB5B" }}
              href="#"
              className="block mx-auto font-mulish md:py-3 px-12 md:px-24 rounded text-lg text-white font-medium uppercase md:mt-4"
            >
              GET 50% OFF
            </a>
            <div className="w-3/4 mx-auto mt-4 flex justify-center items-center">
              <img className="mr-4" src={play} alt="" />
              <a className="text-white font-mulish text-center" href="">
                Watch Video
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
