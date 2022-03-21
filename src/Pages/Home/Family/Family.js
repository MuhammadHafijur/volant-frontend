import React from "react";
import "./Family.css";
import family from "./family.png";

const Family = () => {
  return (
    <div style={{ background: "#FFEEDF80" }} className="">
      <div className="w-11/12 mx-auto py-12 my-12 flex-none md:flex items-center">
        <div className="md:w-1/3">
          <h1
            style={{ lineHeight: "63px" }}
            className="text-[50px] text-center family-title"
          >
            with <br /> your <br /> family
          </h1>
        </div>
        <div className="md:w-2/3">
          <h1 className="text-3xl my-4 font-hatton">
            so you can create happy moments..
          </h1>
          <img src={family} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Family;
