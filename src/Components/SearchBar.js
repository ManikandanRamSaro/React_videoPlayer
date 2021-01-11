import React,{useState} from 'react';

const SearchBar = (props) => {
    const [search,setSearch] = useState('');

    const onInputChange = (event) => {
        setSearch(event.target.value);
    }

    const submitHandler = (event) =>{
        event.preventDefault();
        props.fromSearch(search);
    }

    return (<div className="search-bar ui segment">
    <form className="ui form" onSubmit={submitHandler}>
        <div className="field">
             <label>Search</label>
             <input type="text" value={search} onChange={onInputChange} />
        </div>
    </form>
</div>);

} 

export default SearchBar;