import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videosfiles}) =>{  // also ve can call the props name directly without using props
    const renderList = videosfiles.map((video)=>{
        return <div><VideoItem video={video}/></div>;
    });
    return (
        <div>
          
<div className="ui relaxed divided list"> {renderList}  </div>
        </div>
           
    );
    
} 
export default VideoList;