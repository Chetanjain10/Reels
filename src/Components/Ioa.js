import React,{useEffect, useState} from 'react'
import Video from './Video';
import vid1 from './vid11.mp4';
import vid2 from './vid12.mp4';
import vid3 from './vid13.mp4';
export default function Ioa() {
const[sources,setSources] = useState([{url:vid1},{url:vid2},{url:vid3}]);
const callback = entries=>{
    entries.forEach(element=>{
        console.log(element);
        let el = element.target.childNodes[0];
        el.play().then(()=>{
            //if the video is mot in viewport then pause it
            if(!el.paused && !element.isIntersecting){
                el.pause();
            }
        })
    })
}
const observer = new IntersectionObserver(callback,{
    threshold: 0.9
})
useEffect(()=>{
    console.log('Effect');
    let elements = document.querySelectorAll('.videos');
    elements.forEach(el=>{
        observer.observe(el);
    })
},[]);

    return (
        <>
            <div className='videos-container'>
                <div className='videos'>
                <Video source={sources[0].url} />
                </div>
                <div className='videos'>
                <Video source={sources[1].url} />
                </div>
                <div className='videos'>
                <Video source={sources[2].url} />
                </div>
            </div>
        </>
    )
}
