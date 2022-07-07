import React from 'react'
import mainlogo from './photos/mainlogo.jpg'
import { Link, useNavigate } from 'react-router-dom'
import './Navigationbar.css'
import Cookies from 'js-cookie';



const Navigationbar = () => {
    const navigate = useNavigate();
    const logout = () => {
        try {
            Cookies.remove('user')
            navigate('/home')
        } catch (err) {
            console.log(err.toString);
        }
    }

    const hambtnactive = () => {
        let navToggler = document.querySelector(".nav-toggler");
        navToggler.classList.toggle("active");
        const section1 = document.querySelector(".section-1");
        section1.classList.toggle("open");
        if (section1.classList.contains("open")) {
            section1.style.maxHeight = section1.scrollHeight + "px";
        } else {
            section1.removeAttribute("style");
        }


    }

    return (
        <nav >
            <div className='left'>
                <Link to="/home"><img src={mainlogo} style={{ width: "50px" }} /></Link>
            </div>
            <div className='right'>
                <div className='section-1'>
                    <div className='navlinks'>
                        <Link to="/home" style={{ textDecoration: "none" }}><a>Home</a></Link>
                        <Link to="/courses" style={{ textDecoration: "none" }}><a>Our Courses</a></Link>
                        <Link to="/about" style={{ textDecoration: "none" }}><a>About us</a></Link>
                        <Link to="/contact" style={{ textDecoration: "none" }}><a>Contact us</a></Link>
                    </div>
                    <div className='navbtns'>
                        <Link to="/enrollnow" style={{ textDecoration: "none" }}>
                            <button variant="outline-info" className="text-capitalize">Enroll now</button>
                        </Link>
                        <Link to="/login" style={{ textDecoration: "none" }}>
                            <button variant="outline-info" className="text-capitalize">Login</button>
                        </Link>
                        <div style={{ textDecoration: "none" }}>
                            <button variant="outline-info" className="text-capitalize" onClick={logout}>Logout</button>
                        </div>
                    </div>
                </div>
                <div className='section-2'>
                    <Link to="/userprofile"><button className="userprofilebtn"><i class="fas fa-user" style={{ color: 'white' }}></i></button></Link>
                </div>
                <div className="hamburger-btn">
                    <button onClick={hambtnactive} type="button" class="nav-toggler">
                        <span></span>
                    </button>
                </div>
            </div>
        </nav >
    )
}

export default Navigationbar