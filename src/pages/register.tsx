import React, { useState } from "react";
import Button from "../components/buttonComponent/ButtonComponent";
import Input from "../components/inputComponent/InputComponent";
import View from "../components/viewComponent/ViewComponent";

export const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(data);
    alert("Korisnik je prijavljen!");
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
      <h1>Register</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <Input
          label="Name:"
          type="text"
          className="input"
          placeholder="Your name"
          name="name"
          required
          onChange={handleChange}
        />
        <Input
          label="Email:"
          className="input"
          type="email"
          placeholder="Email"
          name="email"
          required
          onChange={handleChange}
        />
        <Input
          label="Password:"
          className="input"
          type="password"
          placeholder="Password"
          name="password"
          required
          onChange={handleChange}
        />
        <Button variant="signupScreen" onClick={() => console.log("clicked")}>
          Register
        </Button>
      </form>
    </View>
  );
};

export default Register;
