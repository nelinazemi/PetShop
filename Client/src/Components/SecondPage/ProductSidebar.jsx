import MainNavbar from "../MainPage/Navbar";
import Footer from "../MainPage/Footer";
import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const ProductSidebar = () => {
    return (
        <div className="ml-auto" style={{ display: 'flex', height: "120vh" ,overflow: 'scroll initial' }}>
            <CDBSidebar textColor="#fff" backgroundColor="#917FB3" className="text-right">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <a href="/productdisplay" className="text-decoration-none" style={{ color: 'inherit' }}>
                        مشاهده موجودی ها
                    </a>
                </CDBSidebarHeader>
                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink exact to="/bunnies" activeClassName="activeClicked">
                            <CDBSidebarMenuItem>
                                <span>خرگوش های لوپ</span>
                                <img src="img/icons/srabbit.png" className="px-3" height={"40px"}/>
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/stuff" activeClassName="activeClicked">
                            <CDBSidebarMenuItem>
                                <span>وسایل نگهداری</span>
                                <img src="img/icons/spetshop.png" className="px-3" height={"40px"}/>
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="" activeClassName="activeClicked"> 
                            <CDBSidebarMenuItem>
                                <span>سگ</span>
                                <img src="img/icons/sdog.png" className="px-3" height={"40px"}/>
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="" activeClassName="activeClicked">
                            <CDBSidebarMenuItem>
                                <span>حلزون</span>
                                <img src="img/icons/ssnail.png" className="px-3" height={"40px"}/>
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="" activeClassName="activeClicked">
                            <CDBSidebarMenuItem>
                                <span>پرنده های زینتی</span>
                                <img src="img/icons/sbird.png" className="px-3" height={"40px"}/>
                            </CDBSidebarMenuItem> 
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>
            </CDBSidebar>
        </div>        
    )
}

export default ProductSidebar;