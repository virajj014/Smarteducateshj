import React from 'react'
import "./Card3.css"
const Card3 = (props) => {
    const course = props.data
    console.log(props.data);
    return (
        <div className='card3'>
            <div className='img-cont'>
                <img src={course.course_image} />
            </div>
            <div className='details'>
                <div className='head'>
                    <h1>{course.course_name}</h1>
                    <h2>( Created by - {course.course_author} )</h2>
                </div>
                <p>{course.course_description}</p>
                <button>More Details</button>
            </div>
        </div>
    )
}

export default Card3