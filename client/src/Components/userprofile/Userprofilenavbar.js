import React from 'react'
import { Link } from 'react-router-dom'
import './Userprofilenavbar.css'

const Userprofilenavbar = () => {
    const hambtnactive = () => {
        let navToggler = document.querySelector(".nav-toggler-user");
        navToggler.classList.toggle("active");
        const navouter = document.querySelector(".nav-outer");
        navouter.classList.toggle("open1");

        if (navouter.classList.contains("open1")) {
            navouter.style.maxHeight = navouter.scrollHeight + "px";
        } else {
            navouter.removeAttribute("style");
        }

        const navoutermost = document.querySelector(".nav-outermost");
        navoutermost.classList.toggle("open1");
    }


    return (
        <div className='nav-outermost'>
            <div className="user-hamburger-btn">
                <button type="button" class="nav-toggler-user" onClick={hambtnactive}>
                    <span></span>
                </button>
            </div>

            <div className='nav-outer'>
                <h1>
                    My Profile
                </h1>
                <div className='nav-link'>
                    <Link style={{ textDecoration: 'none' }} to="/userprofile"><p>Personal Information</p></Link>
                    <Link style={{ textDecoration: 'none' }} to="/userinvoice"><p>Invoice</p></Link>
                    <Link style={{ textDecoration: 'none' }} to="/changeprofilepic"><p>Change Profile Image</p></Link>
                    <Link style={{ textDecoration: 'none' }} to="/changepassword"><p>Change Password</p></Link>
                </div>
            </div>
        </div>
    )
}

export default Userprofilenavbar