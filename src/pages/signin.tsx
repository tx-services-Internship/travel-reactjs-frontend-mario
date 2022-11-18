import React, { useState } from 'react';

export const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
	<div className="view">
	<h1>Sign In</h1>
    <form onSubmit={submit} className="login-form">
      <label className='label' htmlFor="email">Email</label>

      <input className='input'
        type="email"
        placeholder="Email"
        name="email"
        required
        onChange={e => setEmail(e.target.value)}
      />

      <label className='label' htmlFor="password">Password</label>

      <input className='input'
        type="password"
        placeholder="Password"
        name="password"
        required
        onChange={e => setPassword(e.target.value)}
      />

      <button className="btn" type="submit">Sign In</button>
    </form>
	</div>
  );
};

export default SignInPage;