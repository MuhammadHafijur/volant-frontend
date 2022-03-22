import React from "react";
import "./Friends.css";
import friends from "./friends.png";
import imageOne from "./image-33.png";
import imageTwo from "./image-34.png";
import imageThree from "./image-35.png";
import imageFour from "./image-36.png";
import imageFive from "./image-37.png";
import imageSix from "./image-38.png";

const Friends = () => {
  return (
    <div>
      <div className="">
        <div className="w-11/12 mx-auto py-12 my-12 flex-none md:flex items-center">
          <div className="md:w-2/3">
            <h1 className="my-4 friends-title ">friends</h1>
            <img src={friends} alt="" />
          </div>
          <div className="md:w-1/3">
            <div className="">
              <div className="mb-8 px-8">
                <h1 className="essential-oil-font">Volant Essential Oils</h1>
                <p className="oil-subtitle">From organic plants to your home</p>
              </div>
              <div className="flex items-center mb-8">
                <img className="mr-8" src={imageOne} alt="" />
                <p className="oil-service-title">Sourced ethically</p>
              </div>
              <div className="flex items-center mb-8">
                <img className="mr-8" src={imageTwo} alt="" />
                <p className="oil-service-title">Vegan and cruelty free</p>
              </div>
              <div className="flex items-center mb-8">
                <img className="mr-8" src={imageThree} alt="" />
                <p className="oil-service-title">
                  Sourced in 35+ countries from all continents
                </p>
              </div>
              <div className="flex items-center mb-8">
                <img className="mr-8" src={imageFour} alt="" />
                <p className="oil-service-title">
                  100% pure and certified organic
                </p>
              </div>
              <div className="flex items-center mb-8">
                <img className="mr-8" src={imageFive} alt="" />
                <p className="oil-service-title">Picked at peak ripeness</p>
              </div>
              <div className="flex items-center mb-8">
                <img className="mr-8" src={imageSix} alt="" />
                <p className="oil-service-title">
                  Tested before, during and after distillation
                </p>
              </div>
              <button
                style={{
                  backgroundColor: "#DEAB5B",
                  borderRadius: "5px",
                  width: "354px",
                  // height: "45px",
                }}
                className="block mx-auto items-center bg-yellow-600 border-0 py-1 md:py-3  focus:outline-none rounded fifty-off-font"
              >
                GET 50% OFF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
