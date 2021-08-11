import React from 'react'

export default function Video(props) {
    
    const handleMute=(e)=>{
        e.preventDefault();
        e.target.muted=!e.target.muted;
    }
    return (
        <>
            <video src={props.source} className='video-styles' onClick={handleMute} muted='muted' type='video/mp4'> </video>
        </>
    )
}
