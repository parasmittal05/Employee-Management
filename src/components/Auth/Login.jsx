import React, { useState } from 'react';

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
  handleLogin(email,password)
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form 
          onSubmit={(e) => submitHandler(e)}
          className="flex flex-col items-center justify-center w-full"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 rounded-full text-xl px-5 py-3 placeholder:text-gray-400 w-full"
            type="email"
            placeholder="Enter Your E-Mail"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 rounded-full text-xl px-5 py-3 mt-3 placeholder:text-gray-400 w-full"
            type="password"
            placeholder="Enter your Password"
          />
          <button className="mt-5 text-white border-none outline-none bg-emerald-600 rounded-full text-xl px-5 py-3 w-full">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
