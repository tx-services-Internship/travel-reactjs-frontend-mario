import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/buttonComponent/buttonComponent";
import View from "../components/viewComponent/viewComponent";
import Input from "../components/inputComponent/inputComponent";

export const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const navigate = useNavigate();

  return (
    <View>
      <h1>Sign In</h1>
      <form onSubmit={submit} className="login-form">
        <Input
          label="Email:"
          className="input"
          type="email"
          placeholder="Email"
          name="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Password:"
          className="input"
          type="password"
          placeholder="Password"
          name="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="signupScreen" onClick={() => navigate("/home")}>
          Sign In
        </Button>
      </form>
    </View>
  );
};

export default SignInPage;
