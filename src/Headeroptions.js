import React from 'react'
import "./CSS/header.css"
import { Avatar } from '@mui/material';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import firebase  from 'firebase';
function Headeroptions({Icon,title,avatar}) {

  const user = useSelector(selectUser)
  return (
    <div className='header__options'>
        {
            Icon && <Icon></Icon>
        }
        {
            avatar && <Avatar name={avatar} src={user.photoURL} onClick={e=>firebase.auth().signOut()}/>
        }
        <span>{title}</span>
    </div>
  )
}

export default Headeroptions
