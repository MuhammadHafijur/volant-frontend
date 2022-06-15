import fourDiff from "./4-diff.png";
import award from "./award.png";
import candles from "./candles.png";
import ceramic from "./ceramic.png";
import clock from "./clock.png";
import home from "./home.png";
import oils from "./oils.png";
import scents from "./scents.png";
import "./UniqueVolant.css";
import volant from "./volant.png";

const UniqueVolant = () => {
  return (
    <div
      style={{ background: "rgba(255, 238, 223, 0.5)" }}
      className="pt-8 pb-20"
    >
      <div className="w-9/12 mx-auto">
        <h1 className="handmade-title my-16">
          Our Handmade, Designer Diffuser
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center my-12 font-mulish">
          <div className="w-3/4 ">
            <div className="flex-none md:flex justify-center items-center mb-8">
              <img className=" md:mr-8" src={award} alt="" />
              <p className="handmade-para">
                2022 Award-winning Scandinavian <br /> design
              </p>
            </div>
            <div className="flex-none md:flex justify-center items-center mb-8">
              <img className=" md:mr-8" src={home} alt="" />
              <p className="handmade-para">
                Scents up to 40 square meters of <br /> your home
              </p>
            </div>
            <div className="flex-none md:flex justify-center items-center mb-8">
              <img className=" md:mr-8" src={ceramic} alt="" />
              <p className="handmade-para">
                Handmade using sustainable, high <br /> quality ceramic
              </p>
            </div>
            <div className="flex-none md:flex justify-center items-center">
              <img className=" md:mr-8" src={candles} alt="" />
              <p className="handmade-para">
                6-10 times more cost effective than <br /> scented candles
              </p>
            </div>
          </div>
          <div className="w-3/4">
            <div className="flex-none md:flex justify-center  items-center mb-8">
              <img className=" md:mr-8" src={clock} alt="" />
              <p className="handmade-para">
                4-8 hours runtime and adjustable <br /> LED-light
              </p>
            </div>
            <div className="flex-none md:flex justify-center  items-center mb-8">
              <img className=" md:mr-8" src={scents} alt="" />
              <p className="handmade-para">
                Scents your home without the use <br /> of heat and turns off
                automatically
              </p>
            </div>
            <div className="flex-none md:flex justify-center  items-center mb-8">
              <img className=" md:mr-8" src={volant} alt="" />
              <p className="handmade-para">
                Unique volant technology with 2.2 <br /> million vibrations per
                second
              </p>
            </div>
            <div className="flex-none md:flex justify-center  items-center">
              <img className=" md:mr-8" src={oils} alt="" />
              <p className="handmade-para">
                100% pure and certified organic <br /> essential oils
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center ">
          <div className="mb-12 md:mb-0">
            <img
              className="object-cover object-center w-full lg:px-0"
              alt="hero"
              src={fourDiff}
            />
          </div>
          <div className="px-4 lg:mx-14">
            <p className="mb-8 md:mb-8 lg:mb-16 font-normal ceramic-para text-[24px] md:text-[28px] lg:text-[34px]">
              <span className="font-bold ">A ceramic plate</span> inside our
              diffuser vibrates 2.5 million times per second to break down the
              essential oils and blend them perfectly with water.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex justify-center items-center h-[32px] lg:h-[45px] text-[20px] lg:text-[24px] feel-better-btn feel-better-btn-font border-0 focus:outline-none rounded ">
                Get 50% off
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniqueVolant;
