import React from 'react'
import Userprofilenavbar from './Userprofilenavbar'


const Changeprofileimage = () => {
    return (
        <div className='changepassword-outer'>
            <Userprofilenavbar />
            <div className="changepassword-container">
                <h1>Change Profile Picture</h1>
                <form>
                    <div>
                        <label>Choose new profile Picture</label>
                        <input type="file" />
                    </div>

                    <div className='contfullwidth'>
                        <button >Make Changes</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Changeprofileimage