import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Productslider.css'
import Card2 from '../Cards/Card2'

import cardimg1 from '../photos/cardimgs/1.png'
import cardimg2 from '../photos/cardimgs/2.png'
import cardimg3 from '../photos/cardimgs/3.png'
import cardimg4 from '../photos/cardimgs/4.png'
import cardimg5 from '../photos/cardimgs/5.png'
import cardimg6 from '../photos/cardimgs/6.png'

const Productslider = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (

        <div className="product-slider">
            <h1 style={{ textAlign: "center", fontSize: "70px", color: "#0ad6a0" }}>Explore more</h1>

            <Carousel responsive={responsive}>
                <Card2 courseimg={cardimg1} coursename="Digital Marketing" coursedescription="This is a Very good course for beginners you'll learn a lot and you will learn something unique and this will make you job ready" />
                <Card2 courseimg={cardimg2} coursename="SEO" coursedescription="This is a Very good course for beginners you'll learn a lot and you will learn something unique and this will make you job ready." />
                <Card2 courseimg={cardimg3} coursename="Web Development" coursedescription="This is a Very good course for beginners you'll learn a lot and you will learn something unique and this will make you job ready." />
                <Card2 courseimg={cardimg4} coursename="Video Editing" coursedescription="This is a Very good course for beginners you'll learn a lot and you will learn something unique and this will make you job ready." />
                <Card2 courseimg={cardimg5} coursename="Graphics Designing" coursedescription="This is a Very good course for beginners you'll learn a lot and you will learn something unique and this will make you job ready." />
                <Card2 courseimg={cardimg6} coursename="Public Speaking" coursedescription="This is a Very good course for beginners you'll learn a lot and you will learn something unique and this will make you job ready." />
            </Carousel>
        </div>

        // <div className='product'>
        //     <Card2 courseimg={cardimg1} coursename="Digital Marketing" coursedescription="This is a Very good course for beginners you'll learn a lot and you will learn something unique and this will make you job ready" />
        //     <Card2 courseimg={cardimg2} coursename="SEO" coursedescription="This is a Very good course for beginners you'll learn a lot and you will learn something unique and this will make you job ready." />
        //     <Card2 courseimg={cardimg3} coursename="Web Development" coursedescription="This is a Very good course for beginners you'll learn a lot and you will learn something unique and this will make you job ready." />
        //     <Card2 courseimg={cardimg4} coursename="Video Editing" coursedescription="This is a Very good course for beginners you'll learn a lot and you will learn something unique and this will make you job ready." />
        //     <Card2 courseimg={cardimg5} coursename="Graphics Designing" coursedescription="This is a Very good course for beginners you'll learn a lot and you will learn something unique and this will make you job ready." />
        //     <Card2 courseimg={cardimg6} coursename="Public Speaking" coursedescription="This is a Very good course for beginners you'll learn a lot and you will learn something unique and this will make you job ready." />
        // </div>

    )
}

export default Productslider