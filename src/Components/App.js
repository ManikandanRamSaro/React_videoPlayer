import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../Apis/youtube'
class App extends React.Component{

    state = { videos : [] }
    getFromSearchbox = async (data) =>
    {
      const output= await youtube.get('/search',{
            params:{
                q:data
            }
        })
        this.setState({videos:output.data.items}) 
    }
    render(){
        return(<div className="ui container">
            <SearchBar fromSearch={this.getFromSearchbox}/>
            <p> we found {this.state.videos.length} list of videos </p>
        </div>);
    }
}

export default App;