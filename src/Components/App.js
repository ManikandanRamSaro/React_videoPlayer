import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../Apis/youtube'
class App extends React.Component{

    getFromSearchbox = async (data) =>
    {
      const output= await youtube.get('/search',{
            params:{
                q:data
            }
        }) 
    }
    render(){
        return(<div className="ui container">
            <SearchBar fromSearch={this.getFromSearchbox}/>
        </div>);
    }
}

export default App;