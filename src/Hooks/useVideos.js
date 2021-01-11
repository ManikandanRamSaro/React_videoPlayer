import {useEffect,useState} from 'react';
import youtube from '../Apis/youtube';

const useVideos = (defaultVideo) => {
    const [videos,setVideos] = useState([]);  // input

    useEffect(()=>{                          // input handling 
        searchVideos(defaultVideo);
    },[defaultVideo]);

    const searchVideos = async (data) =>     // output processing
    {
      const output= await youtube.get('/search',{
            params:{
                q:data
            }
        });
        setVideos(output.data.items);
        
        
    }

    return [videos,searchVideos];             // return output
}

export default useVideos;
