import React, { useState } from 'react'
import "./CSS/Login.css"
import { auth } from './firebase'
import { useDispatch } from 'react-redux';
import { loginuser } from './features/userSlice';
function Login() {

  const [signup, setsignup] = useState(false);
  const [name, setname] = useState("");
  const [photoURL, setphotoURL] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const dispatch = useDispatch();

  const register = (e)=>{
    e.preventDefault();

    if(!name){
      return alert("Name is required");
    }
    if(!photoURL){
      return alert("photoURL is required");
    }
    if(!email){
      return alert("email is required");
    }
    if(!password){
      return alert("password is required");
    }
  
    auth.createUserWithEmailAndPassword(email,password).then((userAuth)=>{
      userAuth.user.updateProfile({
        displayName:name,
        photoURL:photoURL
      }).then(()=>{
        dispatch(loginuser({
          email:userAuth.user.email,
          uid: userAuth.user.uid,
          photoURL:photoURL,
          displayName:name
        }))
      })
    }).catch(error=>alert(error));

    setname("");
    setphotoURL("");
    setemail("");
    setpassword("");
  }

  const signIn=(e)=>{
    e.preventDefault();
    if(!email){
      return alert("email is required");
    }
    if(!password){
      return alert("password is required");
    }

    auth.signInWithEmailAndPassword(email,password).then(({user})=>{
      dispatch(loginuser({
        email:user.email,
        uid: user.uid,
        photoURL:user.photoURL,
        displayName:user.displayName
      }))
    }).catch(error=>alert(error))
  }
  return (
    <>
    <div className='loginscreen'>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1200px-LinkedIn_Logo.svg.png'/>

      {
        signup===true ? (
          <form onSubmit={register}>
            <input type='text' placeholder='Full Name' value={name} onChange={e=>setname(e.target.value)}/>
            <input type='text' placeholder='Profile picture URL' value={photoURL} onChange={e=>setphotoURL(e.target.value)}/>
            <input type='email' placeholder='Email' value={email} onChange={e=>setemail(e.target.value)}/>
            <input type='password' placeholder='Password' value={password} onChange={e=>setpassword(e.target.value)}/>

            <input type='submit' value="Sign Up"/>
            <h4>Aleready a member? <span onClick={e=>setsignup(false)}>Login Here</span></h4>
        </form>
        ) : (
          <form onSubmit={signIn}>
            <input type='email' placeholder='Email' value={email} onChange={e=>setemail(e.target.value)}/>
            <input type='password' placeholder='Password' value={password} onChange={e=>setpassword(e.target.value)}/>

            <input type='submit' value="Sign In"/>
            <h4>Not a member ? <span onClick={e=>setsignup(true)}>Register Here</span></h4>
        </form>
        )
      }
    </div>
    </>
  )
}

export default Login