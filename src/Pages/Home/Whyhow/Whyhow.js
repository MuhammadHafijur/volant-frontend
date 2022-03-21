import React from "react";
import "./Whyhow.css";

const Whyhow = () => {
  return (
    <div className="w-11/12 my-8 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="w-9/12 mx-auto font-mulish">
          <h1 className="text-2xl text-center my-8 font-mulish">Why</h1>
          <p className="text-center mb-8 font-medium">
            We have just launched in Germany and want more people to discover
            the benefits of essential oils - in the most beautiful and
            affordable way.
          </p>
          <p className="text-center font-medium">
            That’s why we are welcoming new customers with this special
            starterkit offer for a short periode of time.
          </p>
        </div>
        <div className="w-9/12 mx-auto font-mulish">
          <h1 className="text-2xl text-center my-8 font-mulish">How</h1>
          <p className="text-center mb-8 font-medium">
            Simply add the Volant Diffuser and 3 oils below to get the
            discounts. This will be available for a short period of time and the
            number of starterkits is limited.
          </p>
          <p className="text-center font-medium">
            Check availability under the buy-button. Get yours now before it’s
            too late.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Whyhow;
