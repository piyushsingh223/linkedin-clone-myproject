import React, { useEffect } from 'react';
import Header from './Header';
import SideBar from './SideBar';
import Feed from './Feed';
import Widget from './Widget';
import Login from "./Login"
import { useDispatch, useSelector } from 'react-redux';
import { logoutuser, selectUser, loginuser} from './features/userSlice';
import { auth } from './firebase';

function App() {
  //<div className></div>
  const user = useSelector(selectUser);
  const dispatch=useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        dispatch(loginuser({
          email:userAuth.email,
          uid: userAuth.uid,
          photoURL:userAuth.photoURL,
          displayName:userAuth.displayName
        }))
      }
      else{
        dispatch(logoutuser())
      }
    })
  },
  [])
  return (
    <>
    {
      !user ? (<Login/>) : (
        <div className="app_wrapper">
      <Header/>
      <div className='app__body'>
        <SideBar/>
        <Feed/>
        <Widget/>
      </div>
    </div>
      )
    }
    </>
  );
}

export default App;
