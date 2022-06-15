import React from "react";
import "./AllYouNeed.css";
import assetOne from "./assetOne.jpg";
import assetThree from "./assetThree.jpg";
import assetTwo from "./assetTwo.jpg";

const AllYouNeed = () => {
  return (
    <div>
      <div className="w-[90%]  mx-auto mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center  ">
          <div className="w-[200px]">
            <img className="mb-4" src={assetOne} alt="" />
            <p className="allyouneed-para">
              Add water and 20-25 drops of volant essential oils.
            </p>
          </div>
          <div className="w-[200px]">
            <img className="mb-4" src={assetTwo} alt="" />
            <p className="allyouneed-para">Put the stone cover back on.</p>
          </div>
          <div className="w-[200px]">
            <img className="mb-4 md:mb-10" src={assetThree} alt="" />
            <p className="allyouneed-para">
              Select time interval: 4 hrs, 8hrs or continuous.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllYouNeed;
