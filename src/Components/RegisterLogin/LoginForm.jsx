import React from 'react';
import { Link } from 'react-router-dom';
import './RegisterLogin.css';
import { FaLock } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const LoginForm = () => {
  return (
    <div className='wrapper'>
      <form action="">
        <h2>Login</h2>

        <div className="input-box">
            <MdEmail className='icon'/>
            <input type="email" placeholder='Email' required/>
        </div>
        <div className="input-box">
            <FaLock className='icon'/>
            <input type="password" placeholder='Password' required/>
        </div>

        <button type="submit">Login</button>

        <div className="login-link">
            <p>Don't have an account?<Link to="/register">Register</Link></p>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
