import React,{useState,useContext,useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider'
export default function Login(props) {
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[Loading,setLoading] = useState(false);
    const[error,setError] = useState("");
    const history = useHistory();
    let {currentUser,Login} = useContext(AuthContext);
    const handleLogin= async(e)=>{
        e.preventDefault();
        try{
            console.log('Logging in user');
           setLoading(true);
           await Login(email,password);
          
            setLoading(false);
            history.push('/');
        }catch{
            setError('Failed to Log in');
            setTimeout(()=>setError(''),2000);
            setLoading(false);
        }
        
    }
    useEffect(()=>{
        if(currentUser){
            history.push('/');
        }
    },[])

    return (
        <>
         <div>
                <form onSubmit={handleLogin}>
                    <div>
                    <label htmlFor=''>Email</label>
                    <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                    </div>
                    <div>
                    <label htmlFor=''>Password</label>
                    <input type='text' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                    </div>
                    <button type='submit' disabled={Loading}>Login</button>
                </form> 
                </div>  
        </>
    )
}
