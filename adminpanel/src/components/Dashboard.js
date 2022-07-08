import React, { useEffect, useState } from 'react'
import Adminnavbar from './Adminnavbar'
import './Dashboard.css'
import Topusers from './Topusers'

import { Link } from 'react-router-dom'
const Dashboard = () => {


    return (
        <div className='dashboard-outer'>

            <Adminnavbar />
            <div className='dashboard-inner'>
                <div className='dashboard-main'>
                    <h1 className='head'>Admin Dashboard</h1>

                    <div className='dashboard-indicators'>

                        <div className='statsbox bg1'>
                            <p>Courses Sold</p>
                            <h1>1,210</h1>
                            <div className='DMYA'>
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
                            <div className='DMYA'>
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
                            <div className='DMYA'>
                                <p>1D</p>
                                <p className='active'>1M</p>
                                <p>6M</p>
                                <p>1Y</p>
                                <p>All</p>
                            </div>
                        </div>
                    </div>

                    <Topusers />
                </div>
            </div>

        </div >
    )
}

export default Dashboard