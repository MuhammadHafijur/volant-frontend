import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import Date from "../Date/Date";
import Enhances from "../Enhances/Enhances";
import Family from "../Family/Family";
import Friends from "../Friends/Friends";
import Handmade from "../Handmade/Handmade";
import HowDoes from "../HowDoes/HowDoes";
import OfferEnds from "../OfferEnds/OfferEnds";
import Product from "../Product/Product";
import Recommended from "../Recommended/Recommended";
import Scandinavian from "../Scandinavian/Scandinavian";
import Video from "../Video/Video";
import Whyhow from "../Whyhow/Whyhow";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Recommended></Recommended>
      <Video></Video>
      <Scandinavian />
      <Whyhow />
      <OfferEnds />
      <Product />
      <Handmade />
      <Enhances />
      <Family />
      <Friends />
      <Date />
      <HowDoes />
    </div>
  );
};

export default Home;
