import React, { useEffect, useState } from 'react'
import './Courses.css'
import Card3 from './Cards/Card3.js'
import axios from 'axios'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// const allCourses = require("../model/courseSchema")
const Mycourses = () => {
    const [allCourses, setallCourses] = useState([]);
    const [filterdata, setfilterdata] = useState([]);
    const [keyword, setkeyword] = useState('');

    useEffect(() => {
        axios.get(`/course/course/`).then((response) => {
            setallCourses(response.data);
            setfilterdata(response.data);

        }).catch((e) => {
            console.log(e)
        })
    }, [])


    const handleInputchange = (e) => {
        setkeyword(e.target.value.toLowerCase())
        setfilterdata(allCourses.filter(e => e.course_name.toLowerCase().includes(keyword)))
    }
    return (
        <div className='coursepage'>
            <h1>Your Courses</h1>
            {/* <p>{allCourses.courses[0].coursename}</p> */}
            <div>
                <div className='course-searchbar'>
                    <FontAwesomeIcon icon={faSearch} />
                    <input placeholder='Search any course' value={keyword} onChange={(e) => handleInputchange(e)} type='text' />

                </div>
            </div>

            {filterdata === [] ?
                <p>No Courses</p>
                : <div className='courses_array'>
                    {
                        filterdata.map((e) =>
                            <Card3 data={e} />
                            // console.log(allCourses[0].course_name)
                            // <div>courses:{allCourses}</ div>
                        )
                    }
                </div>}
        </div>
    )
}

export default Mycourses