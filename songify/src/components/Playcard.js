import React, { useEffect, useRef } from 'react'
import Details from './Details'
import Control from './Control'

function Playcard( props) {
  
  const audioE1 = useRef(null)
  const [isPlaying,setisPlaying] = useEffect(false)

  useEffect(( ) => {
    if(isPlaying){
      audioE1.current.play()
    }
    else{
      audioE1.current.pause()
    }
  })
  
  const skipSong = (fowards = true ) => {
    if(fowards){
      props.setCurrentSongIndex(() => {
        let temp = props.CurrentSongIndex;
        temp++;

        if(temp > props.songs.length - 1){
          temp = 0 ;
        }

        return temp;
      });
    }

    else {
      props.setCurrentSongIndex(() => {
        let temp = props.CurrentSongIndex;
        temp--;

        if(temp < 0 ){
          temp = props.songs.length - 1 ;
        }

        return temp;
      });
    }
  };
  return (
    <div className="Playcard"> 
    <h3>Playing Now</h3>
    <Details song = { props.songs[props.CurrentSongIndex] } />
    <Control isPlaying = { isPlaying} setisPlaying = { setisPlaying } skipSong = { skipSong } />
    <audio className='Playcard_audio'
            src={props.songs[props.CurrentSongIndex].url}
            ref = { audioE1}
            controls>

    </audio>

    <p>
        Next Up: 

        <span> { props.songs[props.CurrentSongIndex].name} by { " " } 
        { props.songs[props.CurrentSongIndex].artist }

        </span>
    </p>
    </div>
  )
}

export default Playcard