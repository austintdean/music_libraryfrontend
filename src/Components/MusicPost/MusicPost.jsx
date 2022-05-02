import { useState } from "react";

const MusicPost = (props) => {
    
    
    const [artist, setArtist] = useState([]);
    const [title, setTitle] = useState([]);
    const [album, setAlbum] = useState([]);
    const [releaseDate, setReleaseDate] = useState([]);
    const [genre, setGenre] = useState([]);
    const [likes, setLikes] = useState([]);


        function handleSubmit(event){
            event.preventDefault()
            let newEntry = {
                artist: artist,
                title: title,
                album: album,
                releaseDate: releaseDate,
                genre: genre,
                likes: likes,
            }
        
        props.postNewMusic(newEntry)
        }
    
    
    
    
    return (  
        <form></form>
    );
}
 
export default MusicPost;