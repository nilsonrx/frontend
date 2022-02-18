import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';
import Footer from '../src/components/Footer/Footer';
import Navbar from '../src/components/Navbar/Navbar';
import Login from '../src/pages/Login/Login';
import Register from '../src/pages/Register/Register';
import Profile from '../src/pages/Profile/Profile';
import Home from '../src/pages/Home/Home';
import Game from './pages/Game/Game';
import WishList from '../src/pages/WishList/WishList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

axios.defaults.baseURL = 'https://localhost.com/3000/';
axios.defaults.headers.post['Content-Type'] = 'application/json';


ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/game" element={<Game />} />
        <Route path="/wishlist" element={<WishList />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);  