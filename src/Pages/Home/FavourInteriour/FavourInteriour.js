import React from "react";
import "./FavourInteriour.css";
import jaquiOne from "./jacquiOne.png";
import jaquiTwo from "./jaquiTwo.png";

const FavourInteriour = () => {
  return (
    <div>
      <div
        style={{ background: "rgba(255, 238, 223, 0.5)" }}
        className="py-12 mt-12"
      >
        <div className="w-[90%] mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
            <div className="">
              <img className="w-full " src={jaquiOne} alt="" />
              <p className="favour-para my-8">
                Diffusers harness the amazing power of essential oils to improve
                the air in your home, creating the same refreshing feeling as
                standing next to a waterfall. A volant diffuser is the simplest
                way to enjoy the 100% natural benefits of essential oils.
              </p>
            </div>
            <div className="">
              <h1 className="favour-title my-12">
                A favour for your interiour
              </h1>
              <img className="w-full " src={jaquiTwo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavourInteriour;
