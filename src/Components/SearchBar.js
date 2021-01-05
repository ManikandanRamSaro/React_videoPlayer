import React from 'react';

class SearchBar extends React.Component{

    state = {search:''}

    submitHandler = (event) =>{
        event.preventDefault();
        
    }
    render()
    {
        return (<div className="search-bar ui segment">
            <form className="ui form" onSubmit={this.submitHandler}>
                <div className="field">
                     <label>Search</label>
                     <input type="text" value={this.state.search} onChange={(e)=>{this.setState({search:e.target.value})}} />
                </div>
            </form>
        </div>);
    }
}

export default SearchBar;