import React, { useEffect, useState } from 'react'
import './Courses.css'
// import Card3 from './Cards/Card3.js'
import axios from 'axios'


// const allCourses = require("../model/courseSchema")

const Courses = () => {
    const [allCourses, setallCourses] = useState([]);
    let data;
    useEffect(() => {
        // const getcourses = async () => {
        //     const res = await fetch('/course/course', {
        //         method: 'GET',
        //         headers: {
        //             'Content-Type': 'application/json',
        //             body: JSON.stringify()
        //         }

        //     })
        //     data = await res.json();
        //     if (res.status == 400 || !data) {
        //         console.log('Courses not found')
        //     }
        //     else {
        //         console.log(data);

        //     }
        // }
        // getcourses()
        // axios.get(`/course/course`).then((response) => {
        //     setallCourses(response.data);
        // }).catch((e) => {
        //     console.log(e)
        // })
        // console.log(`Hi all courses ${allCourses}`);


        const getcourses = async () => {
            const res = await fetch('/course/course', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    body: JSON.stringify()
                }

            })
            data = await res.json();
            // console.log(data);
            if (res.status === 400 || !data) {
                console.log('Courses not found')
            }
            else {
                // console.log(JSON.parse(data).coursename);
                // console.log(data.courses[0].coursename);
                setallCourses(data);
                console.log(allCourses)   
                // console.log(typeof (data))
            }
        }
        getcourses()



    });

    // console.log(allCourses.courses[0].coursename)
    return (
        <div className='coursepage'>
            <h1>Our Courses</h1>
            {/* <p>{allCourses.courses[0].coursename}</p> */}
            {allCourses === '' ?
                <p>No Courses</p>
                : <div className='courses_array'>
                    {
                        // allCourses.courses.map((e) =>
                        //     <Card3 data={e} />
                        <div>courses:{data}</ div>
                    }
                </div>}
        </div>
    )
}

export default Courses