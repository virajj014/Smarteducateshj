import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Components/Home';
import Navigationbar from './Components/Navigationbar';
import Login from './Components/Login';
import Enrollnow from './Components/Enrollnow';
import Footer from './Components/Footer';
import FOF from './Components/FOF';
import About from './Components/About';
import Contact from './Components/Contact';
import Courses from './Components/Courses';
import Cookies from 'js-cookie';
import Auth from './Components/Auth';
import Layout from './Components/Layout'


import Userprofile from './Components/userprofile/Userprofile';
import Invoice from './Components/userprofile/Invoice';
import Changeprofileimage from './Components/userprofile/Changeprofileimage';
import Changepassword from './Components/userprofile/Changepassword';
import Logout from './Components/Logout';

function App() {
  return (
    <div>
      <>
        <Navigationbar />

        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route element={<Auth />}>
              {/* authenticate users */}
              <Route path='/userprofile' element={<Userprofile />} />
            </Route>
            <Route path='home' element={<Home />} />
            <Route path='enrollnow' element={<Enrollnow />} />
            <Route path='login' element={<Login />} />
            <Route path='logout' element={<Logout />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='courses' element={<Courses />} />

            <Route path='/userinvoice' element={<Invoice />} />
            <Route path='/changeprofilepic' element={<Changeprofileimage />} />
            <Route path='/changepassword' element={<Changepassword />} />
          </Route>
        </Routes>
        <Footer />

      </>
    </div>
  );
}

export default App;
