import React, { useState } from 'react';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';

function App() {

    const [song, setSong] = useState([{title:'Tek It', artist:'Cafune',album:'Running',release_date:'11-04-2019',genre:'Alternative',likes:0}])

    return (
    <div>
        <DisplayMusic songEntries ={song}/>
   </div>
   )   
}

export default App;