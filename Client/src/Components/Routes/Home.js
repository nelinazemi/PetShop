import * as React from "react";
import MainNavbar from "../MainPage/Navbar";
import Hero from "../MainPage/Hero";
import OtherServices from "../MainPage/OtherServices";
import Footer from "../MainPage/Footer";
import ProductSwiper from "../MainPage/ProductSwiper";
import Services from "../MainPage/Services";
import AboutUs from "../MainPage/AboutUs";
import ContactUs from "../MainPage/ContactUs";

const Home = () => {
    return (
        <div className='text-center'>
            <MainNavbar />
            <Hero />
            <Services />
            <OtherServices />
            <ProductSwiper />
            <ContactUs />
            <AboutUs />
            <Footer />
        </div>
    )
}

export default Home;