import React, {useState,useContext, useEffect} from 'react'
import { AuthContext } from '../Context/AuthProvider';
import { database, storage } from '../firebase';
import { useHistory } from 'react-router-dom';
export default function Signup() {
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const [name,setName] = useState('');
    const [error,setError] = useState('');
    const [Loading,setLoading] = useState(false);
    const [file,setFile] = useState(null); 
    const history = useHistory();
    const {currentUser,signup} = useContext(AuthContext);
    console.log(signup);
    const handleSignup= async(e)=>{
    e.preventDefault();
    try{
    setLoading(true);
    let res =await signup(email,password);
    let uid = res.user.uid;
    console.log(uid);
    const uploadTaskListener = storage.ref(`/users/${uid}/profileImage`).put(file);
    uploadTaskListener.on('state-changed',fn1,fn2,fn3);
    function fn1(snapshot){
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100 ;
        console.log(progress);
    }

    function fn2(error){
        setError(error);
        setTimeout(() => {
            setError('');
        }, 2000);
        setLoading(false);
    }

    async function fn3(){
        let downloadUrl = await uploadTaskListener.snapshot.ref.getDownloadURL();
        console.log(downloadUrl);
        await database.users.doc(uid).set({
            email: email,
            userId: uid,
            userName: name,
            createdAt: database.getCurrentTimeStamp(),
            profileImage : downloadUrl,
            posts : [],
        })
    }
    setLoading(false);
    console.log('user has signed up');
    history.push('/');
    }
    catch(err){
        setError(err);
        setTimeout(()=>{
            setError('');
        },2000);
        setLoading(false);
    }
   
}
    const handleSubmit=(e)=>{
        let file = e.target.files[0];
        if(file!=null){
            setFile(file);
        }
    }
    useEffect(()=>{
        if(currentUser){
            history.push('/');
        }
    },[]);
    return (
            <div>
                <form onSubmit={handleSignup}>
                    <div>
                    <label htmlFor=''>UserName</label>
                    <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}} />
                    </div>
                    <div>
                    <label htmlFor=''>Email</label>
                    <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                    </div>
                    <div>
                    <label htmlFor=''>Password</label>
                    <input type='text' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                    </div>
                    <div>
                    <label htmlFor='profile'>Choose File</label>
                    <input type='file' accept='image/*' onChange={handleSubmit} />
                    </div>
                    <button type='submit' disabled={Loading}>Login</button>
                </form>
            </div>
    
    )
}