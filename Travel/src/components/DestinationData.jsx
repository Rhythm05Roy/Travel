import React from 'react'
import "./Destination.css"

const DestinationData = (props) => {
  return (
    <div>
        <div className='desination'>
        <div className='first-des'>
            <div className='des-text'>
                <h2>{props.headding}</h2>
                <p>{props.text}</p>
            </div>
            <div className='image'>
                <img src={props.img1} alt="img1" />
                <img src={props.img2} alt="img2" />
            </div>
        </div>
    </div>
    </div>
  )
}

export default DestinationData