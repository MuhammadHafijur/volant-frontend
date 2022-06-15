import "./Banner.css";
import banner from "./banner.png";
import play from "./play.png";
import volantPhone from "./volant-phone.png";

const Banner = () => {
  return (
    <div className="">
      {/* Test */}

      {/* TESSSSt */}
      <section className="relative ">
        <img
          className="absolute hidden sm:block inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full "
          src={banner}
          alt=""
        />
        <img
          className="absolute block sm:hidden inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full "
          src={volantPhone}
          alt=""
        />

        <div className="hidden sm:block sm:inset-0 sm:absolute "></div>

        <div className="relative max-w-screen-xl px-4 md:py-32 mx-auto h-screen lg:h-screen lg:items-center  lg:flex">
          <div className="max-w-xl absolute sm:relative top-8 ml-auto text-center sm:text-left">
            <h1 className="text-5xl md:text-[85px] banner-title  mx-auto  ">
              50% OFF
            </h1>
            <p className="mx-auto banner-subheading">
              Your diffuser when buying 3 oils
            </p>
            <div className=" text-center mt-32 md:mt-12">
              <a
                style={{ background: "#DEAB5B" }}
                href="#"
                className="mx-auto md:py-3 px-12 md:px-24 rounded banner-btn md:mt-4"
              >
                GET 50% OFF
              </a>
              <div className="w-3/4 mx-auto mt-2 md:mt-8 flex justify-center items-center">
                <img className="mr-4" src={play} alt="" />
                <a className="text-white font-mulish text-center" href="">
                  Watch Video
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
