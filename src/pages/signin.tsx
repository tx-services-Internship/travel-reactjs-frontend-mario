import React, { useState } from "react";
import Button from "../components/ButtonComponent/ButtonComponent";
import View from "../components/ViewComponent/ViewComponent";
import Input from "../components/InputComponent/InputComponent";

export const SignInPage = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(data);
    alert('Korisnik se ulogovao!');
    localStorage.setItem("data", JSON.stringify(data));
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <View>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <Input
          label="Email:"
          className="input"
          type="email"
          placeholder="Email"
          name="email"
          required
          onChange={handleChange}        />
        <Input
          label="Password:"
          className="input"
          type="password"
          placeholder="Password"
          name="password"
          required
          onChange={handleChange}        />
        <Button variant="signupScreen" onClick={() => console.log("clicked")}>
          Sign In
        </Button>
      </form>
    </View>
  );
};

export default SignInPage;
