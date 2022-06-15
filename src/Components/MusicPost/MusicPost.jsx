import { useState } from "react";
import "./MusicPost.css"

const MusicPost = (props) => {
    
    
    const [artist, setArtist] = useState([]);
    const [title, setTitle] = useState([]);
    const [album, setAlbum] = useState([]);
    const [release_date, setReleaseDate] = useState([]);
    const [genre, setGenre] = useState([]);
    const [likes, setLikes] = useState([]);


        function handleSubmit(event){
            event.preventDefault()
            let newEntry = {
                artist: artist,
                title: title,
                album: album,
                releaseDate: release_date,
                genre: genre,
            }
        
        props.postNewMusic(newEntry)
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