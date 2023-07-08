import {Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import './Sidebar.scss'
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import BubbleChartRoundedIcon from "@mui/icons-material/BubbleChartRounded";
import WalletRoundedIcon from "@mui/icons-material/WalletRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded"

const ASidebar = () => {
    return (
        <Sidebar className="sidebar">
            <Menu>
                <MenuItem icon={<GridViewRoundedIcon />}> داشبورد </MenuItem>
                <MenuItem icon={<BarChartRoundedIcon />}> داده ها </MenuItem>
                <MenuItem icon={<MonetizationOnRoundedIcon />}>محصولات</MenuItem>
                <MenuItem icon={<AccountCircleRoundedIcon />}> حساب </MenuItem>
                <MenuItem icon={<LogoutRoundedIcon />}> خروج </MenuItem>
            </Menu>
        </Sidebar>
    );
  };
  export default ASidebar;