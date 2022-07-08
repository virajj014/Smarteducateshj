import React, { useEffect, useState } from 'react'
import Userprofilenavbar from './Userprofilenavbar'
import "./Userprofile.css";
import Cookies from 'js-cookie';
import axios from 'axios'

const Userprofile = () => {

    const user = Cookies.get("user");
    const emailUser = JSON.parse(user).email;
    const [userdetails, setuserDeatils] = useState('user')

    useEffect(() => {
        axios.get(`/enroll/enroll/email/${emailUser}`).then((response) => {
            setuserDeatils(response.data);
        }).catch((e) => {
            console.log(e)
        })
    }, [])

    const [choice, setChoice] = useState();
    return (
        <div className='userprofile-outer'>
            <Userprofilenavbar />
            <div className="userprofile-container">
                <h1>Personal Information</h1>
                <form>
                    <div>

                        <label>Name</label>
                        <input disabled name='username' value={userdetails[0].name} />
                    </div>
                    <div>
                        <label>Login Id</label>
                        <input disabled name='userloginid' value={userdetails[0].email} />
                    </div>

                    <div>
                        <label>Email</label>
                        <input disabled name='useremail' value={userdetails[0].email} />
                    </div>

                    <div>

                        <label>Mobile Number</label>
                        <input name='userphone' value={userdetails[0].mobileNo} />
                    </div>

                    <div>
                        <label>Gender</label>
                        <select id="gender" 
                        value={choice}
                        defaultValue={"default"}
                        onChange={(e) => setChoice(e.target.value)}>
                            <option value="default" disabled>{userdetails[0].gender}</option>
                            <option value="Male">Male</option>
                            <option value="Female" >Female</option>
                            <option value="Other" >Other</option>
                        </select>
                    </div>

                    <div>
                        <label>DOB</label>
                        <input type="date" value={userdetails[0].dob}/>
                    </div>

                    <div>
                        <label>Select Country</label>
                        <select id="country">
                            <option value="India">India</option>
                        </select>
                    </div>

                    <div>
                        <label>Select State</label>
                        <select id="state">
                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                        </select>
                    </div>


                    <div>
                        <label>Enter City</label>
                        <input name='usercity' value="jabalpur" />
                    </div>

                    <div>
                        <label>Pin Code</label>
                        <input name='usercitypincode' />
                    </div>

                    <div className='contfullwidth'>
                        <label>Address</label>
                        <textarea name='useraddress' />
                    </div>

                    <div className='contfullwidth'>
                        <button type="button" >Make Changes </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Userprofile