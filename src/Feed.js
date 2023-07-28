import React, { useEffect, useState } from 'react'
import { Avatar } from '@mui/material'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TodayIcon from '@mui/icons-material/Today';
import ArticleIcon from '@mui/icons-material/Article';
import "./CSS/Feed.css"
import Post from './Post';
import firebase from "firebase";
import { database } from './firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {
  const user = useSelector(selectUser)
  const [posts, setPost] = useState([]);
  const [input, setInput] = useState();

  const submitPost=(e)=>{
    e.preventDefault();
    database.collection("posts").add({
      name:user.displayName,
      description:"This is test description",
      message:input,
      photoURL:user.photoURL,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  }

  useEffect(() => {
    database.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot=>{
      setPost(snapshot.docs.map(doc=>({
        id:doc.id,
        data:doc.data()
      })))
    })
  }, [])

  return (
    <div className='feed'>
      <div className='feed__input'>
      <div className='feed__form'>
        <Avatar src={user.photoURL}/>
        <form onSubmit={submitPost}>
            <input type='text' placeholder='Create a post' value={input} onChange={e=>setInput(e.target.value)}/>
            <input type='submit'/>
        </form>
        </div>

      <div className='feed__options'>
        <div className='options'>
            <InsertPhotoIcon style={{color:'#70b5f9'}}/>
            <span>Photo</span>
        </div>
        <div className='options'>
            <YouTubeIcon style={{color:'#7fc15e'}}/>
            <span>Video</span>
        </div>
        <div className='options'>
            <TodayIcon style={{color:'#e7a33e'}}/>
            <span>Event</span>
        </div>
        <div className='options'>
            <ArticleIcon style={{color:'#fc9295'}}/>
            <span>Write An Article</span>
        </div>
      </div>
      </div>

   <FlipMove>
      {
        posts.map(({id, data : {name, description, message, photoURL}})=>{
          return <Post key={id} name={name} description={description} message={message} 
          photoURL={photoURL}/>
        })
      }
    </FlipMove>
      
    </div>
  )
}

export default Feed
