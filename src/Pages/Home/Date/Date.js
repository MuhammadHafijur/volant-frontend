import React from "react";
import volant from "./volant.png";

const Date = () => {
  return (
    <div>
      <div style={{ background: "#FFEEDF80" }} className="">
        <div className="w-11/12 mx-auto py-12 my-12  ">
          <h1 className="text-2xl md:text-5xl my-4 font-semibold">
            or even your date
          </h1>
          <div className="flex-none md:flex">
            <div className="md:w-2/3">
              <img src={volant} alt="" />
            </div>
            <div className="md:w-1/3">
              <div className="">
                <h1 className="text-2xl my-4 font-semibold">
                  A few of our 7,000 five-star reviews
                </h1>
                <p>
                  “It’s love! I have recently moved into my new apartment… a
                  special place which now smells and feels amazing x”
                </p>
                <p className="mb-12 font-semibold"> - Martin K, Berlin</p>
                <p>
                  “Best buy for a long time. Think it feels incredibly fresh and
                  harmonious at home! Tom children appreciate turning it on.”
                </p>
                <p className="mb-12 font-semibold"> - Serina K, Bad Wimpfen</p>
                <p>“3 things I just love with this one. ”</p>
                <li>Smells fantastic</li>
                <li>Lovely design</li>
                <li>
                  Incredibly comfortable sound <br /> Looking forward to and try
                  several scents.”
                </li>

                <p className=" font-semibold"> - Katy K, Bernkastel-Kues</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Date;
