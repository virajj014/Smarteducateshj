import React, { useEffect, useState } from 'react'
import logoimg from './photos/register-img.png'
import './Enrollnow.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Enrollnow = () => {
    const navigate = useNavigate();

    const initialValues = {
        email: "",
        mobileNo: "",
        pwd: "",
        cpwd: "",
        state: "",
        referredCode: "",

    }
    const [user, setUser] = useState(initialValues);

    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }

    const register = (e) => {
        e.preventDefault();

        const { name, email, mobileNo, pwd, cpwd, state, referredCode } = user;

        if (!email) {
            alert("email required! ")
        } else if (!mobileNo) {
            alert("mobile number is required! ")
        } else if (!pwd) {
            alert("password is required! ")
        } else if (!state) {
            alert("state is required! ")
        } else {
            try {
                alert(pwd);
                alert(cpwd);
                if (pwd === cpwd) {
                    axios.post('/enroll/enroll',
                        JSON.stringify({ name, email, mobileNo, pwd, cpwd, state, referredCode }), {
                        headers: { "Content-Type": "application/json", 'Accept': 'application/json' }
                    }).then((response) => {
                        alert(response.data.message)
                        console.log(response.data.message)
                        if (response.status === (400)) {
                            console.log(response.data.message)
                        }
                        if (response.status === (201)) {
                            navigate('/login')
                        }

                    }).catch((e) => {
                        if (e.response.status === 400) {
                            alert(e.response.data);
                            // console.log(e.response.status);
                            // alert(e.response.data);
                        }
                    });
                } else {
                    alert('password and confirm password do not match')
                }
            } catch (err) {
                alert(err)
            }

        }
    }

    // const check = () => {
    //     if (
    //         document.getElementById('pwd').value ==
    //         document.getElementById('cpwd').value) {
    //         document.getElementById('message').style.color = 'green';
    //         document.getElementById('message').innerHTML = '✔';
    //     } 
    //     else {
    //         document.getElementById('message').style.color = 'red';
    //         document.getElementById('message').innerHTML = '❌';
    //     }
    // }
    const { email, mobileNo, pwd, cpwd, state, referredCode } = user;
    return (

        <form method='POST' >
            <div className='outer-enrollnow-container '>
                <div className='enrollnow-container'>
                    <div className='enrollnow-left'>
                        <img src={logoimg} />
                    </div>

                    <div className='enrollnow-right'>
                        <h1>Register to Smart Educates</h1>
                        <br />
                        <label>name</label>
                        <input type='text' name='name' value={name} onChange={handleInputs} placeholder='Enter your Full Name' />
                        <label>email Id</label>
                        <input type='email' name="email" value={email} onChange={handleInputs} placeholder='xyz@gmail.com' />

                        <label>Enter Mobile number</label>
                        <input type='number' name='mobileNo' value={mobileNo} onChange={handleInputs} placeholder='Enter your 10 digit Mobile mobileNo' />
                        <div className='sub-form'>
                            <div>
                                <label>Create pwd</label>
                                <input name='pwd' value={pwd}
                                    onChange={handleInputs}
                                    type='password' id="pwd" />
                            </div>
                            <div>
                                <label>Confirm pwd</label>
                                <input type='password' name="cpwd" id="cpwd" value={cpwd}
                                    onChange={handleInputs} />
                                <span id="message"></span>
                            </div>

                        </div>
                        <label for="state">Choose your state from the list:</label>
                        <select id="state" name='state' value={state}
                            onChange={handleInputs}  >
                            <option value="">Select an Option</option>
                            <option value="Madhya Pradesh" >Madhya Pradesh</option>
                            <option value="UP">UP</option>
                            <option value="Kerala" >Kerala</option>
                            <option value="Assam" >Assam</option>
                        </select>
                        <br />
                        <input name='referredCode' value={referredCode}
                            onChange={handleInputs}
                            placeholder='Enter Referral Code' type='text' />
                        <input type="submit" onClick={register} value="submit" />

                        <hr className='light-grey-hr' />
                        <p>Already have an account? <Link to='/login'>Login</Link></p>

                    </div>

                </div>
            </div>
        </form>
    )
}

export default Enrollnow