import React from "react";
import "./Scandinavian.css";
import scandinavian from "./scandinavian.png";

const Scandinavian = () => {
  return (
    <div style={{ background: "#FFEEDF80" }}>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
        <div>
          <img src={scandinavian} alt="" />
        </div>
        <div className="w-11/12 pb-12 sm-pb-0 md:w-9/12 mx-auto text-center">
          <h1 className="text-2xl title font-semibold text-center my-8">
            Beautiful Scandinavian Design
          </h1>
          <p className="text-lg font-normal font-mulish mb-8">
            Our handmade diffuser fills your home with the wonderful scents of
            essential oils to help you feel more energised and calm.
          </p>
          <p className="text-lg font-normal font-mulish">
            The unique Scandinavian design makes it the perfect accent for any
            room and it creates an amazing atmosphere in your home.
          </p>
          <button
            style={{ backgroundColor: "#DEAB5B" }}
            className="inline-flex items-center font-mulish bg-yellow-600 border-0 py-1 px-12 focus:outline-none hover:bg-gray-200 rounded text-white text-base mt-4 md:mt-8"
          >
            GET 50% OFF
          </button>
        </div>
      </div>
    </div>
  );
};

export default Scandinavian;
