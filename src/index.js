import React from 'react';
import ReactDOM from 'react-dom/client';
import {Route, Routes,  BrowserRouter} from "react-router-dom";
import './global.css';
import Home from './pages/Home';
<<<<<<< HEAD
import Login from './pages/Login/Login';
import Register from './pages/Register/register';
=======
import Main from './pages/Main'
>>>>>>> 146e7d07af7c82ebe6dec6a47d96dec0f7e01a8d



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/main" element={<Main />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
    </Routes>
  </BrowserRouter>
);


