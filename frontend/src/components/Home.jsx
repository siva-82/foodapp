import React from "react";
import './Home.css'
import TopSection from "./TopSection";
import Features from "./Features.jsx";
import PopularItems from "./PopularItems.jsx";
import SearchSection from "./SearchSection.jsx";
import InstallAppSection from "./InstallAppSection.jsx";
import CartSection from "./CartSection.jsx";
import BottomSection from "./BottomSection.jsx";
import Footer from "./Footer.jsx";


import { foodArray } from "../foodStore/foodArray";


const Home = () => {
  

  
  return (
    <>
      <TopSection />
      <Features />
      <PopularItems data={foodArray} />
      <SearchSection data={foodArray} />
      <InstallAppSection />
      <CartSection />
      <BottomSection />
      <Footer />
    </>
  );
};

export default Home;
