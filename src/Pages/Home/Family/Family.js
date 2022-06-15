import React from "react";
import "./Family.css";
import family from "./family.png";

const Family = () => {
  return (
    <div style={{ background: "#FFEEDF80" }} className="">
      <div className="w-11/12 py-16 my-12 md:flex mx-auto items-center">
        <div className="md:w-1/3">
          <h1 className="family-title">
            with <br /> your <br /> family
          </h1>
        </div>
        <div className="md:w-2/3">
          <h1 className="family-sub-title my-4">
            so you can create happy moments..
          </h1>
          <img src={family} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Family;
