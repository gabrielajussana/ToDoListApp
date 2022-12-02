import React from 'react';
import ReactDOM from 'react-dom/client';
import {Route, Routes,  BrowserRouter} from "react-router-dom";
import './global.css';
import Home from './pages/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/register';
import Main from './pages/Main'

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


