import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../Apis/youtube'
import VideoList from "./VideoList";
import VideoDetails from './VideoDetails';
class App extends React.Component{

    state = { videos : [] , VideoSelected : null }
    getFromSearchbox = async (data) =>
    {
      const output= await youtube.get('/search',{
            params:{
                q:data
            }
        })
        this.setState({videos:output.data.items}) 
    }

    onVideoSelect = (video) =>{
        //console.log('from the list',video);
        this.setState({VideoSelected:video})
    }
    render(){
        return(<div className="ui container">
            <SearchBar fromSearch={this.getFromSearchbox}/> 
            <VideoDetails video={this.state.VideoSelected}/>
            <VideoList onVideoSelect={this.onVideoSelect} videosfiles={this.state.videos}/>
          
        </div>);
    }
}

export default App;