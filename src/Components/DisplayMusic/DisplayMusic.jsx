import "./DisplayMusic.css"
import React, { useState, useEffect } from 'react';
import axios from "axios"

const DisplayMusic = (props) => {

    
useEffect(() =>{
        props.getAllSongs();
    
    },[]);

    



async function deleteSong(id){
    let response = await axios.delete(`http://127.0.0.1:8000/api/songs/${id}/`);
    if(response.status === 201){
        props.getAllSongs();
    }
}

async function likeSong(id){
    let response = await axios.patch(`http://127.0.0.1:8000/api/songs/${id}/`);
    if(response.status === 201){
        props.getAllSongs();
}}




    return ( 
        <table className="content">
        <thead>
            <tr>
                <th>Song title</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Release Date</th>
                <th>Genre</th>
                <th>Likes</th>
            </tr>
        </thead>
        <tbody>
          {props.song.map((song)=> {
              return(
              <tr key={song.id}>
                  <td>{song.title}</td>
                  <td>{song.artist}</td>
                  <td>{song.album}</td>
                  <td>{song.release_date}</td>
                  <td>{song.genre}</td>
                  <td>{song.likes}</td>
                  <td><button onClick={() => deleteSong(song.id)}>Delete Song</button></td>
                  <td><button onClick={() => likeSong(song.id)}>Like</button></td>
              </tr>
            )})}
        </tbody>
        </table>
    
     );
}
 
export default DisplayMusic;