import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../Apis/youtube'
import VideoList from "./VideoList";
class App extends React.Component{

    state = { videos : [] , onVideoSelect : null }
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
        console.log('from the list',video);
    }
    render(){
        return(<div className="ui container">
            <SearchBar fromSearch={this.getFromSearchbox}/>
            <p> we found {this.state.videos.length} list of videos </p>
            <VideoList onVideoSelect={this.onVideoSelect} videosfiles={this.state.videos}/>
        </div>);
    }
}

export default App;