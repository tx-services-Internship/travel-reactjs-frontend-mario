import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SignInPage from "./pages/signin";
import Register from "./pages/register";
import Forma from "./pages/forma";
import Navbar from './components/navbar';
import './App.css';

function App() {

  return (
    <div className="bg">
    <BrowserRouter>
          <Navbar />
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<SignInPage />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/forma" element={<Forma />}/>
    </Routes>
  </BrowserRouter>

  </div>
  );
}

export default App;
