import React from "react";
import "./Date.css";
import volant from "./volant.png";

const Date = () => {
  return (
    <div>
      <div style={{ background: "#FFEEDF80" }} className="">
        <div className="w-11/12 mx-auto py-12 my-12  ">
          <div className="flex-none md:flex justify-between   ">
            <div className="w-1/3 my-8 mx-auto">
              <div className="my-12">
                <h1 className="mb-14 star-reviews-font">
                  A few of our 5,200 five-star reviews
                </h1>
                <p className="review-para mb-4">
                  “It’s love! I have recently moved into my new apartment… a
                  special place which now smells and feels amazing x”
                </p>
                <p className="mb-14 review-giver "> - Martin K, Berlin</p>
                <p className="review-para mb-4">
                  “Best buy for a long time. Think it feels incredibly fresh and
                  harmonious at home! Tom children appreciate turning it on.”
                </p>
                <p className="mb-14 review-giver"> - Serina K, Bad Wimpfen</p>
                <p className="review-para mb-4">
                  “3 things I just love with this one. ”
                </p>
                <li>Smells fantastic</li>
                <li>Lovely design</li>
                <li className="mb-4">
                  Incredibly comfortable sound <br /> Looking forward to and try
                  several scents.”
                </li>

                <p className=" review-giver"> - Katy K, Bernkastel-Kues</p>
              </div>
            </div>
            <div className="">
              <h1 className="date-title my-4">or even your date</h1>
              <div className="">
                <img src={volant} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Date;
