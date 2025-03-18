import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from '../Pages/Login';

import Register from '../Pages/Register';

import Home from '../pages/Home';

function Rounting() {
  return (
    <div>
      <Router>
        <Routes>
      
                        

                            <Route path="/login" element={<Login/>}/>
                            <Route path="/register" element={<Register/>}/>
                            <Route path="/home" element={<Home/>}/>

                      
                            
        </Routes>
      </Router>
    </div>
  )
}

export default Rounting;
