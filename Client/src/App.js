import './App.css';
import '../node_modules/tailwindcss/base.css';
import '../node_modules/tailwindcss/utilities.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import * as React from "react";
import { BrowserRouter as Router, Routes, Route, redirect } from "react-router-dom";
import Login from './Components/MainPage/Login';
import ProductDisplay from './Components/SecondPage/ProductDisplay';
import ReadMore from './Components/SecondPage/ReadMore';
import EditCard from './Components/Admin/Table/EditCard';
import Home from './Components/Routes/Home';
import AdminRoutes from './Components/Routes/AdminRoutes';

function App() {
  return (
    <Routes className='text-right'>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/adminroutes' element={<AdminRoutes />} />
      <Route path='/editcard' element={<EditCard />} />
      <Route path='/readmore' element={<ReadMore />}/>
      <Route path='/productdisplay' element={<ProductDisplay />} />
    </Routes>
  )
}




export default App;
