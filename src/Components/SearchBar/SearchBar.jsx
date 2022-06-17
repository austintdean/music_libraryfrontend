import React, { useState } from 'react';
import "./SearchBar.css"


const SearchBar = (props) => {


    const [searchTerm, setSearchTerm] = useState('');

    function searchResults(event){
        event.preventDefault();
        let response = props.song.filter((song) => {
            if (song.title.includes(searchTerm)){
                return true;
            }
            if (song.artist.includes(searchTerm)){
                return true;
            }
            if (song.album.includes(searchTerm)){
                return true;
            }
            if (song.release_date.includes(searchTerm)){
                return true;
            }
            if (song.genre.includes(searchTerm)){
                return true;
            }
            
        })
        props.setSong(response)
        
       
        ;
      };
    return (  
        <div className='center'>
            <form onSubmit={searchResults}>
            <input type="text" placeholder="Search..." onChange={ (event) => (setSearchTerm(event.target.value))} value={searchTerm}/>
            <button  type="submit">Search</button>
            </form>
        </div>
    );
}
 
export default SearchBar;