import React from 'react'
import { Card } from 'react-bootstrap'
import './Homepagecoursecardcontainer.css'
import Card1 from './Card1'

import cardimg1 from '../photos/cardimgs/1.png'
import cardimg2 from '../photos/cardimgs/2.png'
import cardimg3 from '../photos/cardimgs/3.png'
import cardimg4 from '../photos/cardimgs/4.png'
import cardimg5 from '../photos/cardimgs/5.png'
import cardimg6 from '../photos/cardimgs/6.png'


const Homepagecoursecardcontainer = () => {
    return (
        <div className='home-all-card-container-outer'>
            <p>Our Trending Courses</p>
            <div className='home-all-card-container'>
                <Card1 courseimg={cardimg1} coursename="Digital Marketing" coursedescription="This is a Very good course for beginners you'll learn a lot and you will learn something unique and this will make you job ready" />
                <Card1 courseimg={cardimg2} coursename="SEO" coursedescription="This is a Very good course for beginners you'll learn a lot and you will learn something unique and this will make you job ready." />
                <Card1 courseimg={cardimg3} coursename="Web Development" coursedescription="This is a Very good course for beginners you'll learn a lot and you will learn something unique and this will make you job ready." />
                <Card1 courseimg={cardimg4} coursename="Video Editing" coursedescription="This is a Very good course for beginners you'll learn a lot and you will learn something unique and this will make you job ready." />
                <Card1 courseimg={cardimg5} coursename="Graphics Designing" coursedescription="This is a Very good course for beginners you'll learn a lot and you will learn something unique and this will make you job ready." />
                <Card1 courseimg={cardimg6} coursename="Public Speaking" coursedescription="This is a Very good course for beginners you'll learn a lot and you will learn something unique and this will make you job ready." />
            </div>
        </div>
    )
}

export default Homepagecoursecardcontainer