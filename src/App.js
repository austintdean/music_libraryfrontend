import React, { useEffect, useState } from 'react';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import MusicPost from './Components/MusicPost/MusicPost'

import axios from 'axios'
import SearchBar from './Components/NavBar/NavBar';


function App() {

    const [song, setSong] = useState([])

    useEffect(() =>{
        getAllSongs();
    
    },[]);


    async function getAllSongs(){
        let response = await axios.get("http://127.0.0.1:8000/api/songs/")
        setSong(response.data)
    }





    async function postNewMusic(newSong){

        let response = await axios.post("http://127.0.0.1:8000/api/songs/", newSong);
        if (response.status === 201){
            getAllSongs()
        }
    }


    return (
    <div>
        <SearchBar/>
        <MusicPost postNewMusic ={postNewMusic}/>
        <DisplayMusic song ={song}/>
   </div>
   )    
}

export default App;