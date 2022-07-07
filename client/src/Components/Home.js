import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'
import Cookies from 'js-cookie'

import carouselimg1 from './photos/home-carousel-img/1.png'
import carouselimg2 from './photos/home-carousel-img/2.png'
import carouselimg3 from './photos/home-carousel-img/3.png'

import imgtexthome1 from './photos/img-text-home/1.png'
import imgtexthome2 from './photos/img-text-home/2.png'
import imgtexthome3 from './photos/img-text-home/3.png'

import Cardcomponent from './Cardcomponent';

const Home = () => {

    const user  =  Cookies.get("user")
    // const navigate =  useNavigate()
    console.log(user)
    // const [userdata , setUserdat ] = useState({})
    // useEffect(()=>{

    //     if(!user) navigate("/")
        
    // },[])

    return (
        <div>
            {/* Carousel */}
            <Carousel>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src={carouselimg1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={carouselimg2}
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carouselimg3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

            <div className='big-heading'><span>We Are Smart Educates</span></div>
            <div className='home-paragraph'>
                <h1>Who Are We ?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Tortor posuere ac ut consequat. Odio pellentesque diam volutpat commodo sed egestas egestas. Eget nunc lobortis mattis aliquam faucibus. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Ipsum dolor sit amet consectetur. Ultricies lacus sed turpis tincidunt id aliquet. Aliquam eleifend mi in nulla posuere. Massa massa ultricies mi quis hendrerit. Tempus egestas sed sed risus pretium quam. Varius duis at consectetur lorem donec massa sapien faucibus.
                </p>
            </div>

            {/* img -text */}
            <div className="img-text-home imgleft center">
                <img src={imgtexthome1} />
                <div>
                    <h1>This is some text</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Tortor posuere ac ut consequat. Odio pellentesque diam volutpat commodo sed egestas egestas. Eget nunc lobortis mattis aliquam faucibus.</p>
                </div>
            </div>

            <div className="img-text-home imgright center">
                <img src={imgtexthome2} />
                <div>
                    <h1>This is some text</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Tortor posuere ac ut consequat. Odio pellentesque diam volutpat commodo sed egestas egestas. Eget nunc lobortis mattis aliquam faucibus.</p>
                </div>
            </div>

            <div className="img-text-home imgleft center">
                <img src={imgtexthome3} />
                <div>
                    <h1>This is some text</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Tortor posuere ac ut consequat. Odio pellentesque diam volutpat commodo sed egestas egestas. Eget nunc lobortis mattis aliquam faucibus.</p>
                </div>
            </div>

            <hr />

            <div className='big-heading'><span style={{ padding: "20px 0px" }}>Our Trending Courses</span></div>
            <div className='cards'>
                <Cardcomponent />
                <Cardcomponent />
                <Cardcomponent />
                <Cardcomponent />
                <Cardcomponent />
                <Cardcomponent />
            </div>
            {/* <hr /> */}
            {/* <div className='big-heading'><span style={{ padding: "20px 0px" }}>Explore more </span></div> */}
        </div>
    )
}

export default Home