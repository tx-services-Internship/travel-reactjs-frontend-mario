import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SignInPage from "./pages/signin";
import Register from "./pages/register";
import Form from "./pages/form";
import Navbar from './components/navbarComponent/navbar';
import './App.css';

function App() {

  return (
    <div className="backGround">
    <BrowserRouter>
          <Navbar />
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<SignInPage />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/form" element={<Form />}/>
    </Routes>
  </BrowserRouter>

  </div>
  );
}

export default App;
