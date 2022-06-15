import "./DisplayMusic.css"


const DisplayMusic = (props) => {
    return ( 
        <table className="">
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
              </tr>
            )})}
        </tbody>
        </table>
    
     );
}
 
export default DisplayMusic;