import React from 'react';

const VideoDetails = ({video}) =>{
    if(!video)
    {
        return <div>..Loading</div>;
    }
    return (
    
        <div> <h1>{video.snippet.title}</h1>
        </div>
    );    
}

export default VideoDetails;