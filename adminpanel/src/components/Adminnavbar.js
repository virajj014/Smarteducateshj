import React, { useState } from 'react'
import mainlogo from '../images/logofull1.png'
import { Link } from 'react-router-dom'
import './Adminnavbar.css'
const Adminnavbar = () => {

    const openAdminanv = () => {
        let navbar = document.getElementById('Adminnavbar')
        // console.log(navbar.style.display)

        if (navbar.style.display == '') {
            navbar.style.display = 'none'
        }
        if (navbar.style.display == 'none') {
            navbar.style.display = 'flex'
        }
        else if (navbar.style.display == 'flex') {
            navbar.style.display = ''
        }
    }

    return (
        <div>
            <button className='Admin-Ham' onClick={openAdminanv}>
                <i className="fa fa-bars"></i>
                {/* <i className="fa fa-times"></i> */}
            </button>

            <div className="Adminnavbar" id="Adminnavbar">
                <button className='Admin-Ham' onClick={openAdminanv}>
                    <i className="fa fa-times"></i>
                </button>
                <img src={mainlogo} />
                <h1>Admin Panel</h1>
                <div>
                    <Link to='/dashboard' onClick={openAdminanv}><a>Dashboard</a></Link>
                    <Link to='/manageusers' onClick={openAdminanv}><a>Manage Users</a></Link>
                    <Link to='/addcourse' onClick={openAdminanv}><a>Add Course</a></Link>
                    <Link to='/managecourse' onClick={openAdminanv}><a>Manage Course</a></Link>
                </div>
                {/* Dashboard,manage users,add course, manage course */}
            </div>
        </div>
    )
}

export default Adminnavbar