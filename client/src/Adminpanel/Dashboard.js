import React, { useEffect, useState } from 'react'
import Adminnavbar from './Adminnavbar'
import './Dashboard.css'
import Topusers from './Topusers'
import axios from 'axios'
import './Adminnavbar.css'
import mainlogo from '.././Components/photos/logofull.png'
import { Link } from 'react-router-dom'
const Dashboard = () => {

    const opennav = () => {
        let navbar = document.getElementById('adminnav-outer')
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
        <div className='dashboard-outer'>

            <div className='adminnav-outer' id='adminnav-outer'>
                <button className='admin-hamburger1' onClick={opennav}>
                    <i className="fa fa-times"></i>
                </button>
                <img src={mainlogo} />
                <div>
                    <h1>Admin Panel</h1>
                    <p className='porange'>Menu</p>
                    <ul>
                        <Link style={{ textDecoration: 'none' }} to={'/dashboard'}><p className='pwhite active-admin-page'>Dashboard</p></Link>

                        <Link style={{ textDecoration: 'none' }} to={'/dashboard'}><p className='pwhite'>Manage Users</p></Link>

                        <Link style={{ textDecoration: 'none' }} to={'/dashboard'}><p className='pwhite'>Bank Account<br />Approvals</p></Link>

                        <Link style={{ textDecoration: 'none' }} to={'/dashboard'}><p className='pwhite'>Pending<br />Payments</p></Link>

                        <Link style={{ textDecoration: 'none' }} to={'/dashboard'}><p className='pwhite'>Top<br />Performers</p></Link>
                    </ul>
                    <p className='porange'>Course</p>
                    <ul>

                        <Link style={{ textDecoration: 'none' }} to={'/dashboard'}><p className='pwhite'>Add Course</p></Link>

                        <Link style={{ textDecoration: 'none' }} to={'/dashboard'}><p className='pwhite'>Manage Course</p></Link>

                    </ul>
                </div>
            </div>

            <div className='dash-column'>
                <p className='phead'> <button className='admin-hamburger' onClick={opennav}>
                    <i className="fa fa-bars"></i>
                </button>Welcome to Admin Dashboard</p>
                <div className='stats1'>
                    <div className='statsbox bg1'>
                        <p>Courses Sold</p>
                        <h1>1,210</h1>
                        <div className='day-month-year-all'>
                            <p>1D</p>
                            <p className='active'>1M</p>
                            <p>6M</p>
                            <p>1Y</p>
                            <p>All</p>
                        </div>
                    </div>

                    <div className='statsbox bg2'>
                        <p>Revenue</p>
                        <h1>Rs.10,00,210</h1>
                        <div className='day-month-year-all'>
                            <p>1D</p>
                            <p >1M</p>
                            <p className='active'>6M</p>
                            <p>1Y</p>
                            <p>All</p>
                        </div>
                    </div>

                    <div className='statsbox bg3'>
                        <p>Users Registered</p>
                        <h1>1,21,011</h1>
                        <div className='day-month-year-all'>
                            <p>1D</p>
                            <p className='active'>1M</p>
                            <p>6M</p>
                            <p>1Y</p>
                            <p>All</p>
                        </div>
                    </div>
                </div>


                <div className='stats2'>
                    <Topusers />

                </div>
            </div>
        </div >
    )
}

export default Dashboard