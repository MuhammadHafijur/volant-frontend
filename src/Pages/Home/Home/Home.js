import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import AllYouNeed from "../AllYouNeed/AllYouNeed";
import Banner from "../Banner/Banner";
import BestQuality from "../BestQuality/BestQuality";
import Date from "../Date/Date";
import Enhances from "../Enhances/Enhances";
import Family from "../Family/Family";
import FavourInteriour from "../FavourInteriour/FavourInteriour";
import FeelBetter from "../FeelBetter/FeelBetter";
import Friends from "../Friends/Friends";
import LetterAngela from "../LetterAngela/LetterAngela";
import OfferEnds from "../OfferEnds/OfferEnds";
import OurFounder from "../OurFounder/OurFounder";
import Process from "../Process/Process";
import Product from "../Product/Product";
import Recommended from "../Recommended/Recommended";
import Scandinavian from "../Scandinavian/Scandinavian";
import SelectedPartners from "../SelectedPartners/SelectedPartners";
import UniqueVolant from "../UniqueVolant/UniqueVolant";
import Video from "../Video/Video";
import VolantTables from "../VolantTables/VolantTables";
import Whyhow from "../Whyhow/Whyhow";
import WhyUse from "../WhyUse/WhyUse";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner></Banner>
      <Recommended></Recommended>
      <Video></Video>
      <Scandinavian />
      <Whyhow />
      <OfferEnds />
      <Product />
      <UniqueVolant />
      <Enhances />
      <Family />
      <Friends />
      <Date />
      <Process />
      <AllYouNeed />
      <WhyUse />
      {/* <HowDoes /> */}
      <FeelBetter />
      <BestQuality />
      <OurFounder />
      <SelectedPartners />
      <FavourInteriour />
      <LetterAngela />
      <VolantTables />
    </div>
  );
};

export default Home;
