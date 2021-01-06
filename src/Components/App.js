import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../Apis/youtube'
import VideoList from "./VideoList";
import VideoDetails from './VideoDetails';
class App extends React.Component{

    state = { videos : [] , VideoSelected : null }

    componentDidMount(){
        this.getFromSearchbox('greating');
    }

    getFromSearchbox = async (data) =>
    {
      const output= await youtube.get('/search',{
            params:{
                q:data
            }
        })
        this.setState({videos:output.data.items,
            VideoSelected:output.data.items[0]
                    }) 
    }

    onVideoSelect = (video) =>{
        //console.log('from the list',video);
        this.setState({VideoSelected:video})
    }
    render(){
        return(<div className="ui container">
            <SearchBar fromSearch={this.getFromSearchbox}/> 
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                          <VideoDetails video={this.state.VideoSelected}/>
                    </div>
                    <div className="five wide column">
                           <VideoList onVideoSelect={this.onVideoSelect} videosfiles={this.state.videos}/>
                    </div>
                
                </div>
            </div>
        </div>);
    }
}

export default App;