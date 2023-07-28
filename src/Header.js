import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./CSS/header.css"
import Headeroptions from "./Headeroptions"
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
function Header() {

  const user = useSelector(selectUser);
  return (
    <div className='header'>
      <div className='header__left'>
        <div className='header__logo'>
            <img src='https://cdn-icons-png.flaticon.com/512/3536/3536505.png'/>
        </div>
        <div className='header__search'>
          <SearchIcon/>
          <input type="text" placeholder='Search'/>
        </div>
      </div>
      <div className='header__right'>
        <Headeroptions Icon={HomeIcon} title="Home"/> 
        <Headeroptions Icon={PeopleIcon} title="My networks"/>
        <Headeroptions Icon={BusinessCenterIcon} title="jobs"/>
        <Headeroptions Icon={MessageIcon} title="Messaaging"/>
        <Headeroptions Icon={NotificationsIcon} title="Notifications"/>
        <Headeroptions avatar={Avatar} title={user.displayName}/>
      </div>
    </div>
  )
}

export default Header
