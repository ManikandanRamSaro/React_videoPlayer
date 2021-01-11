import React,{useState,useEffect} from 'react';
import SearchBar from './SearchBar'; 
import VideoList from "./VideoList";
import VideoDetails from './VideoDetails';

import useVideos from '../Hooks/useVideos';

const App = () =>{

   
    const [videosSelect, setVideosSelect] =useState(null);

    const [videos,searchVideos] = useVideos('Shinchan'); // custom hook
 
    useEffect(()=>{
        setVideosSelect(videos[0]);
    },[videos]);
    

   
    return(<div className="ui container">
            <SearchBar fromSearch={searchVideos}/> 
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                          <VideoDetails video={videosSelect}/>
                    </div>
                    <div className="five wide column">
                    {/* <VideoList onVideoSelect={(video)=> setVideosSelect(video)} videosfiles={videos}/> */}
                    {/* both are same */}
                           <VideoList onVideoSelect={setVideosSelect} videosfiles={videos}/>
                    </div>
                
                </div>
            </div>
        </div>);
}
 
export default App;