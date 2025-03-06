import React from "react";
import Navber from "../Navber/Navber";
import Banner from "./Banner/Banner";
import ClientReview from "./ClientReview/ClientReview";

const Home = () => {
  return (
    <div className="max-w-[1280px] mx-auto   relative">
      <Banner />
      <ClientReview />
    </div>
  );
};

export default Home;
