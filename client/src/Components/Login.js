import React, { useEffect, useState } from 'react'
import logoimg from './photos/logo-img.png'
import './Login.css'
import { Link,  useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Cookies from 'js-cookie';

const Login = () => {
    
    const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [pwd, setPassword] = useState('');

    const userdata = Cookies.get("user");
    useEffect(()=>{
        if(userdata){
            navigate("/home");
        }
    },[])
    const makeFieldsEmpty = () => {
        setEmail("");
        setPassword("");
    }

    const login = (e) => {
        e.preventDefault();
        const pathname =  location?.state?.from?.pathname ||"/home";
        if(email && pwd){         
            try {
                axios.post('/enroll/login',
                    JSON.stringify({ email, pwd }), {
                    headers: { "Content-Type": "application/json" }
                }).then((response) => {
                    console.log()
                    Cookies.set("user",JSON.stringify({'token':response.data.token, 'email':response.data.useremail.email}));
                    navigate(pathname,{replace:true})
                }).catch((e)=>{
                    console.log(e.response.data)
                    if(e.response.status === 404){
                        alert(e.response.data)
                    }
                    if(e.response.status === 403){
                        alert(e.response.data)
                    }                   
                });
                makeFieldsEmpty();
            } catch (err) {
                makeFieldsEmpty();
                alert(err)
            }
        }else{
            alert("Username and Password fields are required");
        }
    }

    return (
        <form>
            <div className='outer-login-container '>
                <div className='login-container'>
                    <div className='login-left'>
                        <img src={logoimg} />
                    </div>
                    <div className='login-right'>
                        <h1>Login</h1>
                        <br />
                        <label>Username</label>
                        <input type="email" name='email' id="username"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Enter your username' />
                        <label>Password</label>
                        <input type="password" name='pwd' id="pwd"
                            value={pwd}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Enter your password' />
                        <Link to="/forgotpsw" className='fp'>Forgot password?</Link>
                        <input type="submit" onClick={login} value="submit" />
                        <hr className='light-grey-hr' />
                        <p>Don't have an account? <Link to='/enrollnow'>Enroll now</Link></p>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Login