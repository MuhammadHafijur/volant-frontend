import React from "react";
import black from "./black.png";
import volant from "./volant.png";

const Enhances = () => {
  return (
    <div>
      <div className="w-9/12 mx-auto mt-24 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="">
            <h1 className="my-12 text-3xl font-bold font-hatton text-center">
              enhances your home..
            </h1>
            <div>
              <img src={black} alt="" />
            </div>
          </div>
          <div className="">
            <h1 className="my-12 text-3xl font-bold font-hatton text-center">
              ..and your mood
            </h1>
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
