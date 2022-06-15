import React from "react";

const BestQuality = () => {
  return (
    <div>
      <div className="w-[90%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-12">
          <div className="px-4 lg:px-8 order-last md:order-none">
            <h1 className="feel-better-title text-xl lg:text-[32px] mb-4 md:mb-2 lg:mb-12 ">
              at the best possible quality.
            </h1>
            <p className="mb-8 md:mb-8 lg:mb-16 feel-better-para text-lg lg:text-[22px]">
              Our premium diffusers are handmade, so every piece has its unique
              characteristics. They are crafted with 5 mm wall thickness and
              painted with sustainable and wear-resistant colour.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex justify-center items-center h-[32px] lg:h-[45px] text-[20px] lg:text-[24px] feel-better-btn feel-better-btn-font border-0 focus:outline-none rounded ">
                Get 50% off
              </button>
            </div>
          </div>
          <div className="mb-12 md:mb-0">
            <iframe
              width="100%"
              height="380"
              src="https://www.youtube.com/embed/uY939VUw-ws"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestQuality;
