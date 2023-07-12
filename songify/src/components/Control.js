import React from 'react'
import { faBackward, faForward, faPause } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Control() {
  return (
    <div className='control'>
        <button className='skipbtn'>
            <FontAwesomeIcon icon = { faBackward} />
        </button>
        <button className='pausebtn'>
            <FontAwesomeIcon icon = { faPause}  />
        </button>
        <button className='skipbtn'>
            <FontAwesomeIcon icon = { faForward}  />
        </button>
    </div>
  )
}

export default Control