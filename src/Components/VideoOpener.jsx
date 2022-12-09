import React, {useState} from 'react'
import Video from '../Styling/video.mp4';

function VideoOpener() {
    const [counter, setCounter] = useState(0);
    let styling = {
        height: '100vh',
        width: '100%',
        objectFit: 'cover',
    }
    let otherStlye = {
        display: 'none'
    }
    const handleVideoEnd = () =>{
        if(counter === 0){
            window.location.href = '#menu'
            setTimeout(() => setCounter(counter+1),1000);
        }
        return '';
    }
    
  return (
    <div>
        <video style={counter > 0 ? otherStlye : styling} src={Video} autoPlay muted onEnded={handleVideoEnd}/>
    </div>
  )
}

export default VideoOpener