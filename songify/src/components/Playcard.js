import React from 'react'
import Details from './Details'
import Control from './Control'

function Playcard() {
  return (
    <div className="Playcard"> 
    <h3>Playing Now</h3>
    <Details/>
    <Control/>
    <audio className='Playcard_audio'
            src=""
            controls>

    </audio>

    <p>
        Next Up: { " " }

        <span> Next Song Here</span>
    </p>
    </div>
  )
}

export default Playcard