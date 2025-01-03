import { Routes, Route, useLocation, Router } from "react-router-dom";
//importing react slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { animateScroll } from "react-scroll";

// import NavBar from "./components/NavBar"
import Home from "./views/Home";
import AllService from "./views/AllService"
import AboutUs from "./views/AboutUs"
import { useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Service from "./views/Service"
import SuccessCase from "./views/SuccessCase"
import SuccessItem from "./views/SuccessItem"
import Blog from "./views/Blog"
import BlogItem from "./views/BlogItem"

function App() {
  const directory = useLocation();
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 0,
    });
  }, [directory.pathname]);

  return (
    <main className="w-full bg-white text-gray-950 font-montserrat">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />}/>
        <Route path="/all-services" element={<AllService />}/>
        <Route path="/services/:service" element={<Service />}/>
        <Route path="/success-cases" element={<SuccessCase />}/>
        <Route path="/success-cases/:name" element={<SuccessItem />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/blog/:id" element={<BlogItem />}/>
      </Routes>
      <Footer />
    </main>
  )
}

export default App