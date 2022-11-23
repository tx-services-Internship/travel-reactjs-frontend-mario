import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Button from '../components/buttonComponent/buttonComponent';
import Input from '../components/inputComponent/inputComponent';
import View from '../components/viewComponent/viewComponent';


export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const navigate = useNavigate();

  return (
    <View>
	<h1>Register</h1>
    <form onSubmit={submit} className="login-form">

	  <label className='label' htmlFor="name">Name</label>

      <Input
        type="text" className='input'
        placeholder="Your name"
        name="name"
        required
        onChange={e => setName(e.target.value)}
      />	

      <label className='label' htmlFor="email">Email</label>

      <Input className='input'
        type="email"
        placeholder="Email"
        name="email"
        required
        onChange={e => setEmail(e.target.value)}
      />

      <label className='label' htmlFor="password">Password</label>

      <Input className='input'
        type="password"
        placeholder="Password"
        name="password"
        required
        onChange={e => setPassword(e.target.value)}
      />

<Button className="base signupScreen"
    onClick={() => navigate('/signin')}>Register</Button>
    </form>
	</View>
  );
};

export default Register;