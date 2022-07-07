import React from 'react'
import Userprofilenavbar from './Userprofilenavbar'


const Changepassword = () => {
    return (
        <div className='userprofile-outer'>
            <Userprofilenavbar />
            <div className="userprofile-container">
                <h1>Change Your Password</h1>
                <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'white' }}>
                    <form style={{ justifyContent: 'left', maxWidth: '90%' }}>

                        <label>Enter Old Password</label>
                        <input type="password" />


                        <label>Enter New Password</label>
                        <input type="password" />


                        <label>Confirm New Password</label>
                        <input type="password" />


                        <div style={{ width: '100%' }}>
                            <button>Make Changes</button>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    )
}

export default Changepassword