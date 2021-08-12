import React,{useState} from 'react'

export default function Uploadfile(props) {
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const types = ['video/mp4','video/wbm','video/ogg'];

    return (
        <> 
        {
        error!=null ? <h1>{error}</h1> :<>
        <input
        type='file'
        style={{display:'none'}}
        />
        <label htmlFor='icon-button-file'>
            <button disabled={loading} >
                uploadFile
            </button>
        
        </label>
        </>
        }  
        </>
    )
}
