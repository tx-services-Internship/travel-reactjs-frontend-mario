import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/ButtonComponent/ButtonComponent";
import View from "../components/ViewComponent/ViewComponent";
import Input from "../components/InputComponent/InputComponent";

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
