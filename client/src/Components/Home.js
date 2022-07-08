import React from 'react'
import Navbar from './Navigationbar'
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'

import carouselimg1 from './photos/home-carousel-img/1.png'
import carouselimg2 from './photos/home-carousel-img/2.png'
import carouselimg3 from './photos/home-carousel-img/3.png'

import imgtexthome1 from './photos/img-text-home/1.png'
import imgtexthome2 from './photos/img-text-home/2.png'
import imgtexthome3 from './photos/img-text-home/3.png'



import Homepagecoursecardcontainer from './Cards/Homepagecoursecardcontainer';
import Productslider from './product-slider/Productslider';

const Home = () => {
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

            <div className='big-heading'><span>Welcome to Smart Educates</span></div>

            <div className='home-paragraph'>
                <h1>Who Are We ?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Tortor posuere ac ut consequat. Odio pellentesque diam volutpat commodo sed egestas egestas. Eget nunc lobortis mattis aliquam faucibus. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Ipsum dolor sit amet consectetur. Ultricies lacus sed turpis tincidunt id aliquet. Aliquam eleifend mi in nulla posuere. Massa massa ultricies mi quis hendrerit. Tempus egestas sed sed risus pretium quam. Varius duis at consectetur lorem donec massa sapien faucibus.
                </p>
            </div>

            <Homepagecoursecardcontainer />

            {/* img -text */}
            <h1 style={{ textAlign: "center", fontSize: "70px", color: "orange" }}>Our Goal</h1>
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


            <Productslider />
        </div>
    )
}

export default Home