import React, { useState } from 'react'
import Adminnavbar from './Adminnavbar'
import './Addcourse.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Addcourse = () => {
    const navigate = useNavigate();
    const [course_name, setcoursename] = useState('')
    const [course_image, setcourseimg] = useState('')
    const [course_author, setcoursecreatorname] = useState('')
    const [course_description, setcoursedescription] = useState('')


    const PostData = async (e) => {
        e.preventDefault()

        axios.post('/course/course',
            JSON.stringify({ course_name, course_image, course_author, course_description }), {
            headers: { "Content-Type": "application/json", 'Accept': 'application/json' }
        }).then((response) => {
            if (response.status === (400)) {
                console.log(response.data.message)
            }
            if (response.status === (200)) {
                alert("successfull!")
            }

        }).catch((e) => {
            if (e.response.status === 400) {
                console.log(e.response.data);
            }
        });

    }
    return (

        <div className='addcourse-outer'>
            <Adminnavbar />
            <div className="addcourse-inner">
                <div className="addcourse-main">
                    <h1>Course Details</h1>
                    <form method='POST'>
                        <input value={course_name} onChange={(e) => { setcoursename(e.target.value) }} placeholder='Enter Course Title' />
                        <input value={course_author} onChange={(e) => { setcoursecreatorname(e.target.value) }} placeholder='Enter Course Creator Name' />
                        <input type='file' value={course_image} onChange={(e) => { setcourseimg(e.target.value) }} placeholder='Upload Course Thumbnail' />
                        <textarea value={course_description} onChange={(e) => { setcoursedescription(e.target.value) }} rows={3} placeholder='Course Description'></textarea>
                        <button onClick={PostData}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Addcourse