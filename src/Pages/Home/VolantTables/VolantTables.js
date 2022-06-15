import React from "react";
import close from "./close.png";
import reed from "./reed.png";
import scented from "./scented.png";
import tik from "./tik.png";
import volant from "./volant.png";
import "./VolantTable.css";

const VolantTables = () => {
  return (
    <div>
      <div className=" mt-16">
        <div className="md:mx-2 md:0 py-2 flex  px-2 lg:px-24 justify-center items-center single-table">
          <div className="w-1/3">
            <h1 className="single-table-font font-bold md:font-bold pr-1 sm:pr-0 text-[14px] md:text-[18px]">
              {/* Scents your home */}
            </h1>
          </div>
          <div className="w-2/3 flex justify-between">
            <img src={volant} alt="" />
            <img src={scented} alt="" />
            <img src={reed} alt="" />
          </div>
        </div>
        <div className="md:mx-2 md:0 py-2 flex  px-2 lg:px-24 items-center">
          <div className="w-1/3">
            <h1 className="single-table-font font-bold md:font-bold pr-1 sm:pr-0 text-[14px] md:text-[18px]">
              {/* No nasty chemicals */}
            </h1>
          </div>
          <div className="w-2/3 flex justify-between">
            <h1 className="table-img-title">Volant Diffuser</h1>
            <h1 className="table-img-title">Scented candle</h1>
            <h1 className="table-img-title">Reed diffuser</h1>
          </div>
        </div>
        <div className="md:mx-2 md:0 py-2 flex  px-2 lg:px-24 items-center single-table">
          <div className="w-1/3">
            <h1 className="single-table-font font-bold md:font-bold pr-1 sm:pr-0 text-[14px] md:text-[18px]">
              Scents your home
            </h1>
          </div>
          <div className="w-2/3 flex justify-between">
            <img src={tik} alt="" />
            <img src={tik} alt="" />
            <img src={tik} alt="" />
          </div>
        </div>
        <div className="md:mx-2 md:0 py-2 flex  px-2 lg:px-24 items-center">
          <div className="w-1/3">
            <h1 className="single-table-font font-bold md:font-bold pr-1 sm:pr-0 text-[14px] md:text-[18px]">
              No nasty chemicals
            </h1>
          </div>
          <div className="w-2/3 flex justify-between">
            <img src={tik} alt="" />
            <img src={close} alt="" />
            <img src={close} alt="" />
          </div>
        </div>
        <div className="md:mx-2 md:0 py-2 flex  px-2 lg:px-24 items-center single-table">
          <div className="w-1/3">
            <h1 className="single-table-font font-bold md:font-bold pr-1 sm:pr-0 text-[14px] md:text-[18px]">
              Safe around kids & pets
            </h1>
          </div>
          <div className="w-2/3 flex justify-between">
            <img src={tik} alt="" />
            <img src={close} alt="" />
            <img src={close} alt="" />
          </div>
        </div>
        <div className="md:mx-2 md:0 py-2 flex  px-2 lg:px-24 items-center">
          <div className="w-1/3">
            <h1 className="single-table-font font-bold md:font-bold pr-1 sm:pr-0 text-[14px] md:text-[18px]">
              Cost effective
            </h1>
          </div>
          <div className="w-2/3 flex justify-between">
            <img src={tik} alt="" />
            <img src={close} alt="" />
            <img src={close} alt="" />
          </div>
        </div>
        <div className="md:mx-2 md:0 py-2 flex  px-2 lg:px-24 items-center single-table">
          <div className="w-1/3">
            <h1 className="single-table-font font-bold md:font-bold pr-1 sm:pr-0 text-[14px] md:text-[18px]">
              Better sleep
            </h1>
          </div>
          <div className="w-2/3 flex justify-between">
            <img src={tik} alt="" />
            <img src={close} alt="" />
            <img src={close} alt="" />
          </div>
        </div>
        <div className="md:mx-2 md:0 py-2 flex  px-2 lg:px-24 items-center">
          <div className="w-1/3">
            <h1 className="single-table-font font-bold md:font-bold pr-1 sm:pr-0 text-[14px] md:text-[18px]">
              Quiet in use
            </h1>
          </div>
          <div className="w-2/3 flex justify-between">
            <img src={tik} alt="" />
            <img src={tik} alt="" />
            <img src={tik} alt="" />
          </div>
        </div>
        <div className="md:mx-2 md:0 py-2 flex  px-2 lg:px-24 items-center single-table">
          <div className="w-1/3">
            <h1 className="single-table-font font-bold md:font-bold pr-1 sm:pr-0 text-[14px] md:text-[18px]">
              Environment friendly
            </h1>
          </div>
          <div className="w-2/3 flex justify-between">
            <img src={tik} alt="" />
            <img src={close} alt="" />
            <img src={close} alt="" />
          </div>
        </div>
        <div className="md:mx-2 md:0 py-2 flex  px-2 lg:px-24 items-center">
          <div className="w-1/3">
            <h1 className="single-table-font font-bold md:font-bold pr-1 sm:pr-0 text-[14px] md:text-[18px]">
              Safe at night
            </h1>
          </div>
          <div className="w-2/3 flex justify-between">
            <img src={tik} alt="" />
            <img src={close} alt="" />
            <img src={tik} alt="" />
          </div>
        </div>
        <div className="md:mx-2 md:0 py-2 flex  px-2 lg:px-24 items-center single-table">
          <div className="w-1/3">
            <h1 className="single-table-font font-bold md:font-bold pr-1 sm:pr-0 text-[14px] md:text-[18px]">
              Awarded best wellness product 2022
            </h1>
          </div>
          <div className="w-2/3 flex justify-between">
            <img src={tik} alt="" />
            <img src={close} alt="" />
            <img src={close} alt="" />
          </div>
        </div>
        <div className="md:mx-2 md:0 py-2 flex  px-2 lg:px-24 items-center">
          <div className="w-1/3">
            <h1 className="single-table-font font-bold md:font-bold pr-1 sm:pr-0 text-[14px] md:text-[18px]">
              Cosy light
            </h1>
          </div>
          <div className="w-2/3 flex justify-between">
            <img src={tik} alt="" />
            <img src={tik} alt="" />
            <img src={close} alt="" />
          </div>
        </div>
        <div className="md:mx-2 md:0 py-2 flex  px-2 lg:px-24 items-center single-table">
          <div className="w-1/3">
            <h1 className="single-table-font font-bold md:font-bold pr-1 sm:pr-0 text-[14px] md:text-[18px]">
              90-day satisfaction guarantee
            </h1>
          </div>
          <div className="w-2/3 flex justify-between">
            <img src={tik} alt="" />
            <img src={close} alt="" />
            <img src={close} alt="" />
          </div>
        </div>
        {/* <div className="md:mx-2 md:0 py-2 flex justify-around items-center">
          <h1 className="single-table-font font-bold md:font-bold pr-1 sm:pr-0 text-[14px] md:text-[18px]">
            No nasty chemicals
          </h1>
          <img src={tik} alt="" />
          <img src={close} alt="" />
          <img src={close} alt="" />
        </div>
        <div className="md:mx-2 md:0 py-2 flex justify-around items-center single-table">
          <h1 className="single-table-font font-bold md:font-bold pr-1 sm:pr-0 text-[14px] md:text-[18px]">
            Safe around kids & pets
          </h1>
          <img src={tik} alt="" />
          <img src={tik} alt="" />
          <img src={tik} alt="" />
        </div> */}
        {/* <div className="px-2 md:px-0 grid grid-cols-4 py-2 justify-items-center items-center my-2">
          <h1 className="single-table-font font-bold md:font-bold pr-1 sm:pr-0 text-[14px] md:text-[18px]">
            No nasty chemicals
          </h1>
          <img src={tik} alt="" />
          <img src={close} alt="" />
          <img src={close} alt="" />
        </div>
        <div className="px-2 md:px-0 grid grid-cols-4 py-2  items-center single-table">
          <h1 className="single-table-font font-bold md:font-bold pr-1 sm:pr-0 text-[14px] md:text-[18px]">
            Safe around kids & pets
          </h1>
          <img src={tik} alt="" />
          <img src={tik} alt="" />
          <img src={tik} alt="" />
        </div>
        <div className="px-2 md:px-0 grid grid-cols-4 py-2  items-center my-2">
          <h1 className="single-table-font font-bold md:font-bold pr-1 sm:pr-0 text-[14px] md:text-[18px]">
            Cost effective
          </h1>
          <img src={tik} alt="" />
          <img src={close} alt="" />
          <img src={close} alt="" />
        </div> */}
        {/* <div className="flex justify-around items-center bg-green-500 w-[9%] mx-auto">
          <h1 className="single-table-font font-bold md:font-bold pr-1 sm:pr-0 text-[14px] md:text-[18px]">
            Scents your home
          </h1>
          <img src={tik} alt="" />
          <img src={tik} alt="" />
          <img src={tik} alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default VolantTables;
