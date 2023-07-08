import '../App.css';
import * as React from "react";
import Sidebar from "./Sidebar/Sidebar";
import ANavbar from './ANavbar/ANavbar';
import CardDisplay from './Table/CardDisplay';


const AdminRoutes = () => {

  return (
    <div className='container'>
      <ANavbar />
          <CardDisplay />
          <Sidebar />
    </div>
  );
};

export default AdminRoutes;
