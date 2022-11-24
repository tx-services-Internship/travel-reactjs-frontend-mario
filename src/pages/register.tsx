import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/buttonComponent/buttonComponent";
import Input from "../components/inputComponent/inputComponent";
import View from "../components/viewComponent/viewComponent";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const navigate = useNavigate();

  return (
    <View className="viewComponent">
      <h1>Register</h1>
      <form onSubmit={submit} className="login-form">
        Name:
        <Input
          type="text"
          className="input"
          placeholder="Your name"
          name="name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        Email:
        <Input
          className="input"
          type="email"
          placeholder="Email"
          name="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        Password:
        <Input
          className="input"
          type="password"
          placeholder="Password"
          name="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="signupScreen"
          onClick={() => navigate("/signin")}
        >
          Register
        </Button>
      </form>
    </View>
  );
};

export default Register;
