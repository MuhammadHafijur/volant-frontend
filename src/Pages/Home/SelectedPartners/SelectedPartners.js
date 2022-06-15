import React from "react";
import copenhagen from "./copenhagen.png";
import dhl from "./dhl.png";
import kadewe from "./kadewe.png";
import lebon from "./lebon.png";
import "./SelectedPartners.css";
import selfrid from "./selfrid.png";

const SelectedPartners = () => {
  return (
    <div>
      <div className="w-[90%] mx-auto mt-24">
        <h1 className="selected-partners-font mb-8">Selected partners</h1>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-x-4 gap-y-8 justify-items-center items-center">
          <img src={dhl} alt="" />
          <img src={copenhagen} alt="" />
          <img src={selfrid} alt="" />
          <img src={kadewe} alt="" />
          <img src={lebon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SelectedPartners;
