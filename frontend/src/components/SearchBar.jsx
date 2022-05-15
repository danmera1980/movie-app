import React from 'react';
import {AiOutlineSearch} from 'react-icons/ai';

export default function SearchBar({findMovies}) {
  return (
    <div className="searchBar">
        <AiOutlineSearch size={24}/>
        <input 
          type="text" 
          name='searchText' 
          placeholder='Search movies'
          onChange={e=>findMovies(e)}
        />
    </div>
  )
}
