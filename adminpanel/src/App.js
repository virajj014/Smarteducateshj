import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Addcourse from './components/Addcourse'
import Managecourse from './components/Managecourse'
import Manageusers from './components/Manageusers'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Dashboard />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/manageusers' element={<Manageusers />} />
        <Route path='/addcourse' element={<Addcourse />} />
        <Route path='/managecourse' element={<Managecourse />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
