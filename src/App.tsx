import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignInPage from "./pages/Signin";
import Register from "./pages/Register";
import Form from "./pages/Form";
import Navbar from "./components/NavbarComponent/Navbar";

function App() {
  return (
    <div className="backGround">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
