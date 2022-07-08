import React from 'react'
import imgtexthome1 from './photos/img-text-home/1.png'
import './Cardcomponent.css'
const Cardcomponent = () => {
    return (
        <div className='card-outer'>
            <img src={imgtexthome1} />
            <div>
                <h1>Digital Marketing</h1>
                <p>This is a very good course and you will learn a lot about Digital marketing</p>
                <button>Explore &gt;</button>
            </div>
        </div>
    )
}

export default Cardcomponent