import React from "react";
import black from "./black.png";
import "./Enhances.css";
import volant from "./volant.png";

const Enhances = () => {
  return (
    <div>
      <div className="w-9/12 mx-auto my-24 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="">
            <h1 className="my-12 enhance-title">enhances your home..</h1>
            <div>
              <img src={black} alt="" />
            </div>
          </div>
          <div className="">
            <h1 className="my-12 enhance-title">..and your mood</h1>
            <div>
              <img src={volant} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enhances;
