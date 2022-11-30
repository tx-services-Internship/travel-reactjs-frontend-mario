import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignInPage from "./pages/Signin";
import Register from "./pages/Register";
import Form from "./pages/Form";
import Navbar from "./components/NavbarComponent/Navbar";
import FilledForms from "./pages/FilledForms";

function App() {
  return (
    <div className="backGround">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Signin" element={<SignInPage />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/FilledForms" element={<FilledForms />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
