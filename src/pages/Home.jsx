import React from "react";
import Header from "../components/HomePage/Header"
import Hero from "../components/HomePage/Hero"
import Category from "../components/HomePage/Category";
import TopSeller from "../components/HomePage/TopSeller";
import WinterSec from "../components/HomePage/WinterSec";
import OurStory from "../components/HomePage/OurStory";
import Social from "../components/HomePage/Social";
import Footer from "../components/HomePage/Footer";

function Home() {
  
  return(
    <div>
      <div className="min-h-screen flex flex-col ">
        < Hero />
        < Category />
        < TopSeller />
        < WinterSec />
        < OurStory />
        < Social />
        < Footer />
      </div>
    </div>
  );
}


export default Home;