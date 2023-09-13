import './user.css';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import PublishIcon from '@mui/icons-material/Publish';
import { Link } from 'react-router-dom';

const User = () => {
  return (
    <div className='user'>
      <div className='userTitleContainer'>
        <h1 className='userTitle'>Edit User</h1>
        <Link to='/newUser'>
          <button className='userAddButton'>Create</button>
        </Link>
      </div>
      <div className='userContainer'>
        <div className='userShow'>
          <div className='userShowTop'>
            <img 
              className='userShowImg' 
              src='https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg'
              alt=''
            />
            <div className='userShowTopTitle'>
              <span className='userShowUsername'>George Stalev</span>
              <span className='userShowUserTitle'>Software Engineer</span>
            </div>
          </div>
          <div className='userShowBottom'>
            <span className='userShowTitle'>Account Details</span>
            <div className='userShowInfo'>
              <PermIdentityIcon className='userShowIcon'/>
              <span className='userShowInfoTitle'>sttallev99</span>
            </div>
            <div className='userShowInfo'>
              <CalendarMonthIcon className='userShowIcon'/>
              <span className='userShowInfoTitle'>08.02.1999</span>
            </div>
            <div className='userShowInfo'>
              <LocalPhoneIcon className='userShowIcon'/>
              <span className='userShowInfoTitle'>+359 885 548 652</span>
            </div>
            <div className='userShowInfo'>
              <AlternateEmailIcon className='userShowIcon'/>
              <span className='userShowInfoTitle'>sttallev99@gmail.xom</span>
            </div>
            <div className='userShowInfo'>
              <MyLocationIcon className='userShowIcon'/>
              <span className='userShowInfoTitle'>Hascovo | Bulgaria</span>
            </div>
          </div>
        </div>
        <div className='userUpdate'>
          <span className='userUpdateTitle'>Edit</span>
          <form className='userUpdateForm'>
            <div className='userUpdateLeft'>
              <div className='userUpdateItem'>
                <label>Username</label>
                <input type='text' placeholder='sttallev99' className='userUpdateInput' />
              </div>
              <div className='userUpdateItem'>
                <label>Full Name</label>
                <input type='text' placeholder='George Stalev' className='userUpdateInput' />
              </div>
              <div className='userUpdateItem'>
                <label>E-mail</label>
                <input type='text' placeholder='sttallev99@gmail.com' className='userUpdateInput' />
              </div>
              <div className='userUpdateItem'>
                <label>Phone number</label>
                <input type='text' placeholder='+359 885 548 652' className='userUpdateInput' />
              </div>
              <div className='userUpdateItem'>
                <label>Address</label>
                <input type='text' placeholder='Hascovo | Bulgaria' className='userUpdateInput' />
              </div>
            </div>
            <div className='userUpdateRight'>
              <div className='userUpdateUpload'>
                <img
                  src='https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg'
                  alt=''
                  className='userUpdateImg'
                />
                <label htmlFor='file'><PublishIcon className='userUpdateIcon'/></label>
                <input type='file' id='file' style={{display: 'none'}}/>
              </div>
              <button className='userUpdateButton'>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default User
