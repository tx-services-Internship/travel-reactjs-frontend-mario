import React from "react";
import { useNavigate } from "react-router-dom";
import Button from '../components/buttonComponent/buttonComponent';
import View from '../components/viewComponent/viewComponent';

const Form = () => {

  const navigate = useNavigate();

  return (
    <View>
      <h1>Fill in the Form</h1>
      <Button className="base formScreen"
    onClick={() => navigate(-1)}>Back</Button>
    </View>
  );
  };
 

  export default Form;