import { useState } from "react";
import "./MusicPost.css"
import axios from "axios"

const MusicPost = (props) => {
    
    
    const [artist, setArtist] = useState([]);
    const [title, setTitle] = useState([]);
    const [album, setAlbum] = useState([]);
    const [release_date, setReleaseDate] = useState([]);
    const [genre, setGenre] = useState([]);


        function handleSubmit(event){
            event.preventDefault()
            let newEntry = {
                title: title,
                artist: artist,
                album: album,
                release_date: release_date,
                genre: genre,
            }
            console.log("title",title)
            console.log("artist",artist)
            console.log("album",album)
            console.log("release date",release_date)
            console.log("genre",genre)
            console.log("new entry", newEntry)
            postNewSong(newEntry)
        
        }

async function postNewSong(entry){
    let response = await axios.post("http://127.0.0.1:8000/api/songs/", entry)
    console.log(response.data)
}
    
    
    
    
    return (  
        <form onSubmit={handleSubmit} className="form-line">
            <div>
                <label>Artist</label>
                <input type="text" value={artist} onChange={(event)=>setArtist(event.target.value)}/>
            </div>
            <div>
                <label>Title</label>
                <input type="text" value={title} onChange={(event)=>setTitle(event.target.value)}/>
            </div>
            <div>
                <label>Album</label>
                <input type="text" value={album} onChange={(event)=>setAlbum(event.target.value)}/>
            </div>
            <div>
                <label>Release Date</label>
                <input type="date" value={release_date} onChange={(event)=>setReleaseDate(event.target.value)}/>
            </div>
            <div>
                <label>Genre</label>
                <input type="text" value={genre} onChange={(event)=>setGenre(event.target.value)}/>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>

        </form>
    );
}
 
export default MusicPost;