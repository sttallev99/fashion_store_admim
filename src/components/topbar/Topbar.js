import React from 'react';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';


import './topbar.css';
import { Link } from 'react-router-dom';


const Topbar = () => {
    const token = false;
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topbarLeft'>
                <span className='logo'>Fashion store</span>
            </div>
            <div className='topbarRight'>
                {token ? 
                (
                    <>
                        <div className='topbarIconContainer'>
                            <NotificationsNoneOutlinedIcon fontSize='large' />
                            <span className='topIconBadge'>2</span>
                        </div>
                        <div className='topbarIconContainer'>
                            <LanguageOutlinedIcon fontSize='large'/>
                            <span className='topIconBadge'>2</span>
                        </div>
                        <div className='topbarIconContainer'>
                            <SettingsOutlinedIcon fontSize='large'/>
                        </div>
                        <img src='https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg' alt='' className='topAvatar' />
                    </>
                ) : 
                (
                    <Link to='/login'>
                        <button className='loginBtn'>Login</button>
                    </Link>
                )
                }
            </div>
        </div>
    </div>
  )
}

export default Topbar
