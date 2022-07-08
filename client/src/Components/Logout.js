// import React, { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios';

// const Logout = () => {
//     alert("logout func")
//     const navigate = useNavigate();
//     useEffect(() => {
//         alert("logout func useEffect")
//         axios.get('/enroll/logout',{},{
//             'headers': {'Content-Type': 'application/json'},
//             'withCredentials': true
//         }).then((response) => {
//             console.log(response)
//             navigate('/home')            
//         }).catch((e) => {
//             console.log(e)
//         })
//     })

//     return (
//         <>
//         </>
//     )
// }

// export default Logout