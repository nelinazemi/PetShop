import MainNavbar from "../MainPage/Navbar";
import Footer from "../MainPage/Footer";
import React from 'react';
import ProductSidebar from "./ProductSidebar";

const ProductDisplay = () => {
    return (
        <div>
            <MainNavbar />
            <ProductSidebar />
            <Footer />
        </div>
        
    )
}

export default ProductDisplay;