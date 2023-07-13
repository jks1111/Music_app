import React, { useEffect, useState } from 'react'
import './App.css';
import Records from './data/sample.json'
import Playcard from './components/Playcard';
function App() {
  const [songs] = useState([
    {
      album: "Tu Jhoothi Main Makkaar",
    url: "https://open.spotify.com/album/1t1gWslYejaaqicumEbdKU",
    image: "https://i.scdn.co/image/ab67616d0000b27360098f31391483986de30b66",
    id: "1t1gWslYejaaqicumEbdKU",
    artist: "Pritam"
    },
    {
      name: "Tere Pyaar Mein",
        id: "7Myx7fMLEdkBrkMGK0zhZp",
        url: "https://open.spotify.com/track/7Myx7fMLEdkBrkMGK0zhZp",
        image: "https://p.scdn.co/mp3-preview/934085d1005df2d8d0e94833795f9a155dd77d64?cid=0b297fa8a249464ba34f5861d4140e58",
        duration_ms: 266094,
        artist: "Pritam, Arijit Singh, Amitabh Bhattacharya, Nikhita Gandhi"
    }
  ])

  const [CurrentSongIndex , setCurrentSongIndex] = useState(0);
  const [NextSongIndex , setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if(CurrentSongIndex + 1 > songs.length - 1){
        return 0 ;
      }
     else {
      return CurrentSongIndex + 1 ;
     }
    })
  }, [ CurrentSongIndex , songs.length] )
  return (
    <div className="App">
      This is an app.
      <Playcard CurrentSongIndex = { CurrentSongIndex} setCurrentSongIndex = { setCurrentSongIndex} 
       NextSongIndex = { NextSongIndex} setNextSongIndex = { setNextSongIndex} songs = { songs } />
    </div> 
  );
}

export default App;
