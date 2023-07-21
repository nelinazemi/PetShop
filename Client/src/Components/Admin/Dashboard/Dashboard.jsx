import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import AddCard from '../Table/AddCard';
import EditCard from '../Table/EditCard';
import ProductList from '../Table/ProductList';

const Dashboard = () => {
    return (
        <div className='dash-container' style={{backgroundColor: "#DBC4F0"}}>
            <div className="row">
                <div className="col-2 ml-auto" style={{ display: 'flex', minHeight: '150vh', overflow: 'scroll initial' }}>
                    <CDBSidebar textColor="#fff" backgroundColor="#917FB3" className="text-right">
                        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                            <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                                پنل
                            </a>
                        </CDBSidebarHeader>
                        <CDBSidebarContent className="sidebar-content">
                            <CDBSidebarMenu>
                                <NavLink exact to="/" activeClassName="activeClicked">
                                    <CDBSidebarMenuItem icon="columns">داشبورد</CDBSidebarMenuItem>
                                </NavLink>
                                <NavLink exact to="/" activeClassName="activeClicked">
                                    <CDBSidebarMenuItem icon="table">ویرایش موجودی ها</CDBSidebarMenuItem>
                                </NavLink>
                                <NavLink exact to="/tables" activeClassName="activeClicked"> 
                                    <CDBSidebarMenuItem icon="user">تنظیمات</CDBSidebarMenuItem>
                                </NavLink>
                                <NavLink exact to="/profile" activeClassName="activeClicked">
                                    <CDBSidebarMenuItem icon="chart-line">آمار وبسایت</CDBSidebarMenuItem>
                                </NavLink>
                                <NavLink exact to="/" activeClassName="activeClicked">
                                    <CDBSidebarMenuItem icon="signout">خروج</CDBSidebarMenuItem>
                                </NavLink>
                            </CDBSidebarMenu>
                        </CDBSidebarContent>
                    </CDBSidebar>
                </div>
                <div className="col-10 px-5">
                    <div className='row p-3'>
                        <div className='col-sm-6'>
                            <AddCard />
                        </div>
                        <div className='col-sm-6'>
                            <EditCard />
                        </div>
                    </div>
                    <div className='row'>
                        <ProductList />
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Dashboard;