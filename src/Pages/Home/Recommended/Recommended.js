import React from "react";
import bazar from "./bazar.png";
import cosmopolitan from "./cosmopolitan.png";
import ellie from "./ellie.png";
import instyle from "./instyle.png";
import instyleTwo from "./instyleTwo.png";
import "./Recommended.css";
import vogue from "./vogue.png";

const Recommended = () => {
  return (
    <div className="my-12">
      <div className="w-11/12 mx-auto">
        <h1 className="my-8 text-center tested-title text-2xl">
          Tested and recommended by
        </h1>
        <div className="grid grid-cols-3  md:grid-cols-6 gap-8">
          <img src={vogue} alt="" />
          <img src={ellie} alt="" />
          <img src={instyle} alt="" />
          <img src={cosmopolitan} alt="" />
          <img src={bazar} alt="" />
          <img src={instyleTwo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Recommended;
