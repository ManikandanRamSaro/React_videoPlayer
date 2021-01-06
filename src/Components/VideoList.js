import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videosfiles,onVideoSelect}) =>{  // also ve can call the props name directly without using props
    const renderList = videosfiles.map((video)=>{
        return <div><VideoItem onVideoSelect={onVideoSelect} video={video}/></div>;
    });
    return (
        <div>
          
<div className="ui relaxed divided list"> {renderList}  </div>
        </div>
           
    );
    
} 
export default VideoList;