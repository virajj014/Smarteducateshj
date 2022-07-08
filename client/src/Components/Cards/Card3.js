import React from 'react'
import "./Card3.css"
const Card3 = (props) => {
    const course = props.data
    // console.log(props);
    return (
        <div className='card3'>
            <div className='img-cont'>
                <img src={course.courseimg} />
            </div>
            <div className='details'>
                <div className='head'>
                    <h1>{course.coursename}</h1>
                    <h2>( Created by - {course.coursecreatorname} )</h2>
                </div>
                <p>{course.coursedescription}</p>
                <button>More Details</button>
            </div>
        </div>
    )
}

export default Card3