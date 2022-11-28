import React from "react";
import { useNavigate } from "react-router-dom";
import FormComponent from "../components/Form/FormComponent";
import "../components/Form/FormComponent.css";
import "../App.css";

const Form = () => {
  const navigate = useNavigate();

  return (
    <div className="App">
      <FormComponent />
    </div>
  );
};

export default Form;
