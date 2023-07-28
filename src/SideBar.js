import React from 'react'
import "./CSS/sideBar.css"
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
function SideBar() {

  const user=useSelector(selectUser);
  return (
    <div className='sidebar'>
      <div className='sidebar__profile'>
        <img src='https://th.bing.com/th/id/OIP.1Wd11So0xosR8h5LQNwhigHaEo?pid=ImgDet&rs=1'/>
        <div className='profile__details'>
          <Avatar src={user.photoURL}/>
          <h4>{user.displayName}</h4>
          <p>React Developer</p>
        </div>

        <div className='profile__stats'>
          <span>who Viewed Your Profile</span>
          <span className='stats__number'>41</span>
        </div>
        <div className='profile__stats'>
          <span>connections<br/><b>Grow Your Network</b></span>
          <span className='stats__number'>541</span>
        </div>
      </div>

      <div className='sidebar__recent'>
        <p>Recent</p>
        <p className='hash'><span>#</span>Programming</p>
        <p className='hash'><span>#</span>Reactjs</p>
        <p className='hash'><span>#</span>Reduxtoolkit</p>
        <p className='hash'><span>#</span>webDevelopment</p>
        <p className='hash'><span>#</span>contentwriting</p>
        <p className='hash'><span>#</span>seoMarketing</p>
      </div>
    </div>
  )
}

export default SideBar
