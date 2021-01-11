import {useEffect,useState} from 'react';
import youtube from '../Apis/youtube';

const useVideos = (defaultVideo) => {
    const [videos,setVideos] = useState([]);

    useEffect(()=>{
        searchVideos(defaultVideo);
    },[]);

    const searchVideos = async (data) =>
    {
      const output= await youtube.get('/search',{
            params:{
                q:data
            }
        });
        setVideos(output.data.items);
        
        
    }

    return [videos,searchVideos];
}

export default useVideos;
