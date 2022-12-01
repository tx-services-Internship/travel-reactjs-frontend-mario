import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SignInPage from "./pages/signin";
import Register from "./pages/register";
import Form from "./pages/form";
import Navbar from "./components/navbarComponent/navbar";
import FilledForms from "./pages/filledForms";

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
