import React from "react";
import { Carousel } from "react-carousel-minimal";
import paid from "./duty_paid_brown.png";
import energy from "./energy.png";
import guarantee from "./guarantee_brown.png";
import truck from "./image-25.png";
import imageOne from "./imageOne.png";
import payment from "./payment-method.png";
import "./Product.css";
import secure from "./secure_payment.png";
import tik from "./tik.png";
import ylan from "./ylan.png";

const Product = () => {
  const data = [
    {
      image: imageOne,
      caption: `<div>
                      San Francisco
                      <br/>
                      Next line
                    </div>`,
      discount: "-50%",
    },
    {
      image:
        "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
      caption: "Scotland",
    },
    {
      image:
        "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      caption: "Darjeeling",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
      caption: "San Francisco",
    },
    {
      image:
        "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
      caption: "Scotland",
    },
    {
      image:
        "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
      caption: "Darjeeling",
    },
    {
      image:
        "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
      caption: "San Francisco",
    },
    {
      image:
        "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
      caption: "Scotland",
    },
    {
      image:
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
      caption: "Darjeeling",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const discount = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <div>
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 my-12">
          <div className="">
            <div className="pb-40" style={{ textAlign: "center" }}>
              <div
                style={{
                  padding: "0 20px",
                }}
              >
                <Carousel
                  data={data}
                  time={2000}
                  width="850px"
                  height="500px"
                  captionStyle={captionStyle}
                  radius="10px"
                  slideNumber={true}
                  slideNumberStyle={slideNumberStyle}
                  captionPosition="bottom"
                  automatic={true}
                  dots={true}
                  pauseIconColor="white"
                  pauseIconSize="40px"
                  slideBackgroundColor="darkgrey"
                  slideImageFit="cover"
                  thumbnails={true}
                  thumbnailWidth="100px"
                  style={{
                    textAlign: "center",
                    maxWidth: "850px",
                    maxHeight: "500px",
                    margin: "0px auto",
                  }}
                />
              </div>
            </div>
            <div className="">
              <div className="grid grid-cols-2 md:grid-cols-4 items-center md:px-12 w-11/12 mx-auto">
                <div className="">
                  <img src={truck} alt="" />
                  <p>Free espress shipping and returns</p>
                </div>
                <div className="">
                  <img src={paid} alt="" />
                  <p>Free espress shipping and returns</p>
                </div>
                <div className="">
                  <img src={guarantee} alt="" />
                  <p>Free espress shipping and returns</p>
                </div>
                <div className="">
                  <img src={secure} alt="" />
                  <p>Free espress shipping and returns</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 md:mt-0">
            <div className="grid grid-cols-2 md:grid-cols-3 font-mulish">
              <div className="">
                <h1 className="volant-diffuser-font">The Volant Diffuser</h1>
              </div>
              <div className="">
                <h1>69 € 139€</h1>
              </div>
              <div className="mt-12 md:mt-0">
                <div className="flex items-center px-4 -mt-8 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 "
                    viewBox="0 0 20 20"
                    fill="#DEAB5B"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 "
                    viewBox="0 0 20 20"
                    fill="#DEAB5B"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 "
                    viewBox="0 0 20 20"
                    fill="#DEAB5B"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 "
                    viewBox="0 0 20 20"
                    fill="#DEAB5B"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 "
                    viewBox="0 0 20 20"
                    fill="#DEAB5B"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {/* Quantity */}
                  <p style={{ color: "#6F6F6F" }} className="">
                    <span>(7,321)</span>
                  </p>
                </div>
                <button
                  style={{ background: "#DEAB5B" }}
                  className="text-white rounded-full px-12 py-1"
                >
                  100,000 sold
                </button>
              </div>
            </div>
            <div className=" my-8 font-mulish">
              <p>
                “Fills the house with a gorgeous, fresh scent. Perfect for when
                I need some relaxing time to myself or when I have guests over
                and want my home to smell pleasant. I enjoyed it so much, I had
                to order a second one!”
              </p>
            </div>
            {/* Pick Color */}
            <div className="">
              <p className="mb-2 font-mulish">Pick color</p>
              <div className="grid grid-cols-4 rounded-lg border font-mulish">
                <button
                  style={{ background: "rgba(222, 171, 91, 0.2)" }}
                  className="border-r-2 py-3 flex justify-around items-center"
                >
                  <h1>White</h1>
                  <span class="block rounded-full transition ease-in duration-300">
                    <a
                      href="#red"
                      class="block w-4 h-4 md:w-6 md:h-6 bg-white rounded-full"
                    ></a>
                  </span>
                </button>
                <button className="border-r-2 py-2 flex justify-around items-center">
                  <h1>White</h1>
                  <span class="block rounded-full transition ease-in duration-300">
                    <a
                      href="#red"
                      class="block w-4 h-4 md:w-6 md:h-6 bg-black rounded-full"
                    ></a>
                  </span>
                </button>
                <button className="border-r-2 py-2 flex justify-around items-center">
                  <h1>White</h1>
                  <span class="block rounded-full transition ease-in duration-300">
                    <a
                      href="#red"
                      class="block w-4 h-4 md:w-6 md:h-6 bg-gray-400 rounded-full"
                    ></a>
                  </span>
                </button>
                <button className="py-2 flex justify-around items-center">
                  <h1>White</h1>
                  <span class="block rounded-full transition ease-in duration-300">
                    <a
                      style={{ background: "#D28C03" }}
                      href="#red"
                      class="block w-4 h-4 md:w-6 md:h-6 rounded-full"
                    ></a>
                  </span>
                </button>
              </div>
            </div>
            <div className="font-mulish">
              <h6 className="pt-4 font-semibold">
                Pick three or more 100% pure scents
              </h6>
              <div className="bg-gray-200">
                <div className="flex  mt-2   rounded-lg">
                  <div className="">
                    <img className="mr-4 my-4 " src={energy} alt="" />
                  </div>
                  <div className="grid grid-cols-2 py-2 px-2 ">
                    <div className="">
                      <h1>Energy Blend (15 ml)</h1>
                      <h4>250 hours of aroma</h4>
                    </div>
                  </div>
                  <div className="py-8">
                    <div className="flex justify-around">
                      <div className=" mr-2">
                        <h1 style={{ color: "#6F6F6F" }}>
                          <strike>25 €</strike>{" "}
                          <span style={{ color: "#DEAB5B" }}>20 €</span>
                        </h1>
                      </div>
                      <div className="flex">
                        <h1>Added</h1>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-8 w-8"
                          viewBox="0 0 20 20"
                          fill="rgba(222, 171, 91, 0.5)"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="flex items-center">
                        <button className="bg-white rounded mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M20 12H4"
                            />
                          </svg>
                        </button>
                        <button className="bg-white rounded-lg px-4 mr-2">
                          1
                        </button>
                        <button className="bg-white rounded">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 4v16m8-8H4"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="">
                    <details className="pb-1 px-12 w-full ">
                      <summary>Info</summary>
                      <div className="grid grid-cols-2">
                        <div className="">
                          <p className="mb-2">
                            “Relax has become my absolute favorite in a hectic
                            everyday life! Lovely fragrance that provides a
                            comfortable and relaxing atmosphere in my small
                            house apartment.” - Theres B.
                          </p>
                          <h1 className="text-xl font-bold">
                            Best use cases for Relax:
                          </h1>
                          <div className="px-2">
                            <li>
                              In the living room after a long day when you need
                              to wind down.
                            </li>
                            <li>
                              During challenging moments to redusce stress
                            </li>
                            <li>
                              Before wine and dine with family and friends
                            </li>
                          </div>
                        </div>
                        <div className="">
                          <h1>Ingredients:</h1>
                          <div className="grid grid-cols-2">
                            <div className="flex">
                              <img src={ylan} alt="" />
                              <h1>Ylan Ylang Sweeet</h1>
                            </div>
                            <div className="flex">
                              <img src={ylan} alt="" />
                              <h1>Ylan Ylang Sweeet</h1>
                            </div>
                            <div className="flex">
                              <img src={ylan} alt="" />
                              <h1>Ylan Ylang Sweeet</h1>
                            </div>
                            <div className="flex">
                              <img src={ylan} alt="" />
                              <h1>Ylan Ylang Sweeet</h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </details>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-200 mt-8 rounded-lg">
                <div className="flex py-2 px-4 ">
                  <div className="">
                    <img className="mr-4" src={energy} alt="" />
                  </div>
                  <div className="">
                    <h1>Energy Blend (15 ml)</h1>
                    <h4>250 hours of aroma</h4>
                  </div>
                </div>

                <div className="">
                  <div className="flex justify-around">
                    <div className=" mr-2">
                      <h1 style={{ color: "#6F6F6F" }}>
                        <strike>25 €</strike>{" "}
                        <span style={{ color: "#DEAB5B" }}>20 €</span>
                      </h1>
                    </div>
                    <div className="flex">
                      <h1>Added</h1>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-8 w-8"
                        viewBox="0 0 20 20"
                        fill="rgba(222, 171, 91, 0.5)"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="flex items-center">
                      <button className="bg-white rounded mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M20 12H4"
                          />
                        </svg>
                      </button>
                      <button className="bg-white rounded-lg px-4 mr-2">
                        1
                      </button>
                      <button className="bg-white rounded">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <details className="-mt-2 ml-4 md:ml-20 pb-1">
                  <summary>Info</summary>
                  <p className="mb-2">
                    “Relax has become my absolute favorite in a hectic everyday
                    life! Lovely fragrance that provides a comfortable and
                    relaxing atmosphere in my small house apartment.” - Theres
                    B.
                  </p>
                  <h1 className="text-xl font-bold">
                    Best use cases for Relax:
                  </h1>
                  <div className="px-2">
                    <li>
                      In the living room after a long day when you need to wind
                      down.
                    </li>
                    <li>During challenging moments to redusce stress</li>
                    <li>Before wine and dine with family and friends</li>
                  </div>
                </details>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-200 mt-8 rounded-lg">
                <div className="flex py-2 px-4 ">
                  <div className="">
                    <img className="mr-4" src={energy} alt="" />
                  </div>
                  <div className="">
                    <h1>Energy Blend (15 ml)</h1>
                    <h4>250 hours of aroma</h4>
                  </div>
                </div>

                <div className="">
                  <div className="flex justify-around">
                    <div className=" mr-2">
                      <h1 style={{ color: "#6F6F6F" }}>
                        <strike>25 €</strike>{" "}
                        <span style={{ color: "#DEAB5B" }}>20 €</span>
                      </h1>
                    </div>
                    <div className="flex">
                      <h1>Added</h1>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-8 w-8"
                        viewBox="0 0 20 20"
                        fill="rgba(222, 171, 91, 0.5)"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="flex items-center">
                      <button className="bg-white rounded mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M20 12H4"
                          />
                        </svg>
                      </button>
                      <button className="bg-white rounded-lg px-4 mr-2">
                        1
                      </button>
                      <button className="bg-white rounded">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <details className="-mt-2 ml-4 md:ml-20 pb-1">
                  <summary>Info</summary>
                  <p className="mb-2">
                    “Relax has become my absolute favorite in a hectic everyday
                    life! Lovely fragrance that provides a comfortable and
                    relaxing atmosphere in my small house apartment.” - Theres
                    B.
                  </p>
                  <h1 className="text-xl font-bold">
                    Best use cases for Relax:
                  </h1>
                  <div className="px-2">
                    <li>
                      In the living room after a long day when you need to wind
                      down.
                    </li>
                    <li>During challenging moments to redusce stress</li>
                    <li>Before wine and dine with family and friends</li>
                  </div>
                </details>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-200 mt-8 rounded-lg">
                <div className="flex py-2 px-4 ">
                  <div className="">
                    <img className="mr-4" src={energy} alt="" />
                  </div>
                  <div className="">
                    <h1>Energy Blend (15 ml)</h1>
                    <h4>250 hours of aroma</h4>
                  </div>
                </div>

                <div className="">
                  <div className="flex justify-around">
                    <div className=" mr-2">
                      <h1 style={{ color: "#6F6F6F" }}>
                        <strike>25 €</strike>{" "}
                        <span style={{ color: "#DEAB5B" }}>20 €</span>
                      </h1>
                    </div>
                    <div className="flex">
                      <h1>Added</h1>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-8 w-8"
                        viewBox="0 0 20 20"
                        fill="rgba(222, 171, 91, 0.5)"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="flex items-center">
                      <button className="bg-white rounded mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M20 12H4"
                          />
                        </svg>
                      </button>
                      <button className="bg-white rounded-lg px-4 mr-2">
                        1
                      </button>
                      <button className="bg-white rounded">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <details className="-mt-2 ml-4 md:ml-20 pb-1">
                  <summary>Info</summary>
                  <p className="mb-2">
                    “Relax has become my absolute favorite in a hectic everyday
                    life! Lovely fragrance that provides a comfortable and
                    relaxing atmosphere in my small house apartment.” - Theres
                    B.
                  </p>
                  <h1 className="text-xl font-bold">
                    Best use cases for Relax:
                  </h1>
                  <div className="px-2">
                    <li>
                      In the living room after a long day when you need to wind
                      down.
                    </li>
                    <li>During challenging moments to redusce stress</li>
                    <li>Before wine and dine with family and friends</li>
                  </div>
                </details>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-200 mt-8 rounded-lg">
                <div className="flex py-2 px-4 ">
                  <div className="">
                    <img className="mr-4" src={energy} alt="" />
                  </div>
                  <div className="">
                    <h1>Energy Blend (15 ml)</h1>
                    <h4>250 hours of aroma</h4>
                  </div>
                </div>

                <div className="">
                  <div className="flex justify-around">
                    <div className=" mr-2">
                      <h1 style={{ color: "#6F6F6F" }}>
                        <strike>25 €</strike>{" "}
                        <span style={{ color: "#DEAB5B" }}>20 €</span>
                      </h1>
                    </div>
                    <div className="flex">
                      <h1>Added</h1>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-8 w-8"
                        viewBox="0 0 20 20"
                        fill="rgba(222, 171, 91, 0.5)"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="flex items-center">
                      <button className="bg-white rounded mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M20 12H4"
                          />
                        </svg>
                      </button>
                      <button className="bg-white rounded-lg px-4 mr-2">
                        1
                      </button>
                      <button className="bg-white rounded">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <details className="-mt-2 ml-4 md:ml-20 pb-1">
                  <summary>Info</summary>
                  <p className="mb-2">
                    “Relax has become my absolute favorite in a hectic everyday
                    life! Lovely fragrance that provides a comfortable and
                    relaxing atmosphere in my small house apartment.” - Theres
                    B.
                  </p>
                  <h1 className="text-xl font-bold">
                    Best use cases for Relax:
                  </h1>
                  <div className="px-2">
                    <li>
                      In the living room after a long day when you need to wind
                      down.
                    </li>
                    <li>During challenging moments to redusce stress</li>
                    <li>Before wine and dine with family and friends</li>
                  </div>
                </details>
              </div>
            </div>
            <div className="">
              <div className="grid grid-cols-2 mt-12">
                <div className="">
                  <h1>
                    <span className="font-bold">Total</span> Including VAT and
                    shipping
                  </h1>
                </div>
                <div className="text-right">
                  <h1>You save 85 €</h1>
                  <h1>
                    <span>214 €</span> <span>129 €</span>
                  </h1>
                </div>
              </div>
              <button
                style={{ background: "#DEAB5B" }}
                className="w-full rounded py-3 text-white"
              >
                BUY NOW
              </button>
            </div>
            {/* In Stock */}
            <div className="mt-3">
              <h1>
                <span className="font-bold">In stock:</span> 47 starter kits
                left of the offer
              </h1>
              {/* <div className="grid grid-cols-8 border py-4  rounded-full">
                <div className="border-r-2 bg-green-300"></div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
                <div></div>
              </div> */}
              <div className="">
                <div className="grid grid-cols-8 rounded-full border font-mulish">
                  <div className="border-r-2 py-4"></div>
                  <div className="border-r-2 py-4"></div>
                  <div className="border-r-2 py-4"></div>
                  <div className="border-r-2 py-4"></div>
                  <div className="border-r-2 py-4"></div>
                  <div className="border-r-2 py-4"></div>
                  <div className="border-r-2 py-4"></div>
                  <div className="py-4 "></div>
                </div>
              </div>
            </div>
            {/* 100% Satisfaction Guarantee */}
            <div className="bg-gray-200 rounded-lg mt-4">
              <div className="flex items-center px-4 py-2">
                <div className="mr-4">
                  <img className="w-24" src={tik} alt="" />
                </div>
                <div className="">
                  <h1 className="mb-1">100% stisfaction guarantee</h1>
                  <p>
                    Try the diffuser for{" "}
                    <span className="font-bold">90 days</span> in your home, and
                    if you want to return it, we offer a free return and a full
                    refund - no questions asked.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-2">
              <img src={payment} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
