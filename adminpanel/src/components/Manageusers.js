import React from 'react'
import Adminnavbar from './Adminnavbar'
import Topusers from './Topusers'
import './Manageusers.css'
const Manageusers = () => {
    return (
        <div className='manageusers-outer'>
            <Adminnavbar />
            <div className="manageusers-inner">
                <Topusers />
            </div>
        </div>
    )
}

export default Manageusers