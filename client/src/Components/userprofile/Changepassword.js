import React from 'react'
import Userprofilenavbar from './Userprofilenavbar'
import './Changepassword.css'

const Changepassword = () => {
    return (
        <div className='changepassword-outer'>
            <Userprofilenavbar />
            <div className="changepassword-container">
                <h1>Change Your Password</h1>
                <div>
                    <form >
                        <label>Enter Old Password</label>
                        <input type="password" />


                        <label>Enter New Password</label>
                        <input type="password" />


                        <label>Confirm New Password</label>
                        <input type="password" />


                        <div >
                            <button>Make Changes</button>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    )
}

export default Changepassword