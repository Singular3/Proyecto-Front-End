import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';

import Register from '../Pages/Register';

import Home from '../pages/Home';

import Admin from '../pages/Admin';

function Routing() {
  return (
    <div>
      <Router>
        <Routes>
      
                        

                            <Route path="/login" element={<Login/>}/>
                            <Route path="/register" element={<Register/>}/>
                            <Route path="/home" element={<Home/>}/>
                            <Route path="/admin" element={<Admin/>}/>
                           
                            
                                                      
        </Routes>
      </Router>
    </div>
  )
}

export default Routing;
