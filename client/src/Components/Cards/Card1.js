import React from 'react'
import "./Card1.css"
const Card1 = (props) => {
    return (
        <div className='card1'>
            <img src={props.courseimg} />
            <h1>{props.coursename}</h1>
            <p>{props.coursedescription}</p>
            <button>More Details</button>
        </div>
    )
}

export default Card1