import React from "react";
// import bg from "./bg.png";
// import youtube from "./youtube.png";

const Video = () => {
  return (
    <div className="w-9/12 mx-auto">
      <div className="relative overflow-hidden h-full pb-24">
        {/* <img src={bg} className="absolute md:h-11/12 w-full object-cover" />
        <div className="inset-0  absolute"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex justify-center items-center md:py-32 xl:py-56">
          <div className="mx-auto mt-10 sm:mt-0 md:items-center relative z-10">
            <img className="w-16 md:w-full" src={youtube} alt="" />
          </div>
        </div> */}
        <iframe
          className="w-full h-[593px]"
          // width="560"
          // height="315"
          src="https://www.youtube.com/embed/5C_HPTJg5ek"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
