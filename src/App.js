import React, { useEffect, useState } from 'react';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import MusicPost from './Components/MusicPost/MusicPost'
import NavBar from './Components/NavBar/NavBar';
import axios from 'axios'
import SearchBar from './Components/SearchBar/SearchBar';


function App() {

    const [song, setSong] = useState([])

    useEffect(() =>{
        getAllSongs();
    
    },[]);


    async function getAllSongs(){
        let response = await axios.get("http://127.0.0.1:8000/api/songs/")
        setSong(response.data)
    }



   

    return (
    <div className='disco'>
        <NavBar song={song}/>
        <SearchBar song={song} setSong={setSong}getAllSongs={getAllSongs}/>
        <DisplayMusic song ={song} getAllSongs={getAllSongs}/>
        <MusicPost />
   </div>
   )    
}

export default App;