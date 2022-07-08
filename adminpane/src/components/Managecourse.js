import React from 'react'
import Adminnavbar from './Adminnavbar'
import Topusers from './Topusers'
import './Managecourse.css'
const Managecourse = () => {
    return (
        <div className='managecourses-outer'>
            <Adminnavbar />
            <div className="managecourses-inner">
                <Topusers />
            </div>
        </div>
    )
}

export default Managecourse