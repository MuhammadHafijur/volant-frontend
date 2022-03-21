import React from "react";
import "./OfferEnds.css";

const OfferEnds = () => {
  return (
    <div style={{ background: "#4A3F3C" }} className="">
      <div className="sm:2/3 md:w-1/3 mx-auto text-white py-12 text-center">
        <h1 className="mb-8 text-xl font-mulish">The offer ends in</h1>
        <div className="grid grid-cols-3">
          <div>
            <h1 className="text-4xl font-hatton">7</h1>
            <p className="text-xl font-mulish">Hours</p>
          </div>
          <div>
            <h1 className="text-4xl font-hatton">25</h1>
            <p className="text-xl font-mulish">Minutes</p>
          </div>
          <div>
            <h1 className="text-4xl font-hatton">13</h1>
            <p className="text-xl font-mulish">Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferEnds;
