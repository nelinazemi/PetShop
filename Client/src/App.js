import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import * as React from "react";
import { Routes, Route, redirect } from "react-router-dom";

import Navbar from './Components/Main/Navbar';
import Hero from './Components/Main/Hero';
import Services from './Components/Main/Services';
import ContactUs from './Components/Main/ContactUs';
import AboutUs from './Components/Main/AboutUs';
import Footer from './Components/Main/Footer';
import Bunnies from './Components/Main/Product/SwiperSections/Bunnies';
import ProductList from './Components/Main/Product/ProductList';
import Sections from './Components/SecondPage/Sections';
import OtherServices from './Components/Main/OtherServices';
import Stuff from './Components/Main/Product/SwiperSections/Stuff';
import Customers from './Components/Main/Product/SwiperSections/Customers';
import AdminRoutes from './admin/AdminRoutes';

// function App() {
//   return (
//     <div className='App'>
//       <AdminRoutes />
//     </div>
//   )
// }




function App() {
  return (
      <div className='App'>
        {/* <Navbar />
        <Hero /> */}
        <Services />
        {/* <OtherServices />
        <Bunnies />
        <Stuff />
        <Customers />
        <ContactUs />
        <AboutUs />
        <Footer /> */}
        <Routes>
          {/* <Route path="/productlist" element={<ProductList />} /> */}
          <Route path="/sections" element={<Sections />} />
        </Routes>
      </div>
  )
}




export default App;
