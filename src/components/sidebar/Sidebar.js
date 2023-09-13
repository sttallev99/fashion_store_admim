import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';

import './sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
            <h3 className='sidebarTitle'>Dashboard</h3>
            <ul className='sidebarList'>
                <Link to='/'>
                    <li className='sidebarListItem'>
                        <HomeIcon className='sidebarIcon'/>
                        Home
                    </li>
                </Link>
                <li className='sidebarListItem'>
                    <BarChartIcon className='sidebarIcon'/>
                    Analytics
                </li>
                <li className='sidebarListItem'>
                    <TrendingUpIcon className='sidebarIcon'/>
                    Sales
                </li>
            </ul>
        </div>
        <div className='sidebarMenu'>
            <h3 className='sidebarTitle'>Quick Menu</h3>
            <ul className='sidebarList'>
                <Link to='/users'>
                    <li className='sidebarListItem'>
                        <PersonOutlineIcon className='sidebarIcon'/>
                        Users
                    </li>
                </Link>
                <li className='sidebarListItem'>
                    <StorefrontIcon className='sidebarIcon'/>
                    Products
                </li>
                <li className='sidebarListItem'>
                    <AttachMoneyIcon className='sidebarIcon'/>
                    Transactions
                </li>
                <li className='sidebarListItem'>
                    <QueryStatsIcon className='sidebarIcon'/>
                    Reports
                </li>
            </ul>
        </div>
        <div className='sidebarMenu'>
            <h3 className='sidebarTitle'>Notifications</h3>
            <ul className='sidebarList'>
                <li className='sidebarListItem'>
                    <MailOutlineOutlinedIcon className='sidebarIcon'/>
                    Mail
                </li>
                <li className='sidebarListItem'>
                    <DynamicFeedOutlinedIcon className='sidebarIcon'/>
                    Feedback
                </li>
                <li className='sidebarListItem'>
                    <ChatBubbleOutlineOutlinedIcon className='sidebarIcon'/>
                    Messages
                </li>
            </ul>
        </div>
        <div className='sidebarMenu'>
            <h3 className='sidebarTitle'>Staff</h3>
            <ul className='sidebarList'>
                <li className='sidebarListItem'>
                    <WorkOutlineOutlinedIcon className='sidebarIcon'/>
                    Manage
                </li>
                <li className='sidebarListItem'>
                    <ReportOutlinedIcon className='sidebarIcon'/>
                    Reports
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
