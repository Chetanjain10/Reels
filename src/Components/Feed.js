import React,{useContext, useEffect, useState} from 'react'
import Header from './Header';
import Uploadfile from './UploadFile';
import { database } from '../firebase';
import { AuthContext} from '../Context/AuthProvider';
export default function Feed(props) {
const {currentUser} = useContext(AuthContext);
const [userData,setUserData] = useState(null);
  useEffect(()=>{
    const unsub = database.users.doc(currentUser.uid).onSnapshot((doc)=>{
        setUserData(doc.data());
    })
  },[currentUser])
    return (
        <>
        {   userData!=null ? <h1>Hello </h1>:
            <Header />
        }   
        <div style={{height: '9.5vh'}}>
        <div className='feed-container'>
        <div className='center'>
            <Uploadfile userData={userData} />
        </div>
        </div>
        </div>
        </>
    )
}
