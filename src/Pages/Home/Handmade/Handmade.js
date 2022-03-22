import React from "react";
import award from "./award.png";
import candles from "./candles.png";
import ceramic from "./ceramic.png";
import clock from "./clock.png";
import "./Handmade.css";
import home from "./home.png";
import oils from "./oils.png";
import scents from "./scents.png";
import volant from "./volant.png";

const Handmade = () => {
  return (
    <div>
      <div className="w-9/12 mx-auto">
        <h1 className="handmade-title my-16">
          Our Handmade, Designer Diffuser
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center my-12 font-mulish">
          <div className="w-3/4 ">
            <div className="flex-none md:flex justify-center items-center mb-8">
              <img className=" md:mr-8" src={award} alt="" />
              <p className="handmade-para">
                2022 Award-winning Scandinavian <br /> design
              </p>
            </div>
            <div className="flex-none md:flex justify-center items-center mb-8">
              <img className=" md:mr-8" src={home} alt="" />
              <p className="handmade-para">
                Scents up to 40 square meters of <br /> your home
              </p>
            </div>
            <div className="flex-none md:flex justify-center items-center mb-8">
              <img className=" md:mr-8" src={ceramic} alt="" />
              <p className="handmade-para">
                Handmade using sustainable, high <br /> quality ceramic
              </p>
            </div>
            <div className="flex-none md:flex justify-center items-center">
              <img className=" md:mr-8" src={candles} alt="" />
              <p className="handmade-para">
                6-10 times more cost effective than <br /> scented candles
              </p>
            </div>
          </div>
          <div className="w-3/4">
            <div className="flex-none md:flex justify-center  items-center mb-8">
              <img className=" md:mr-8" src={clock} alt="" />
              <p className="handmade-para">
                4-8 hours runtime and adjustable <br /> LED-light
              </p>
            </div>
            <div className="flex-none md:flex justify-center  items-center mb-8">
              <img className=" md:mr-8" src={scents} alt="" />
              <p className="handmade-para">
                Scents your home without the use <br /> of heat and turns off
                automatically
              </p>
            </div>
            <div className="flex-none md:flex justify-center  items-center mb-8">
              <img className=" md:mr-8" src={volant} alt="" />
              <p className="handmade-para">
                Unique volant technology with 2.2 <br /> million vibrations per
                second
              </p>
            </div>
            <div className="flex-none md:flex justify-center  items-center">
              <img className=" md:mr-8" src={oils} alt="" />
              <p className="handmade-para">
                100% pure and certified organic <br /> essential oils
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Handmade;
