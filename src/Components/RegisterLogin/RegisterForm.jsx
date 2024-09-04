import React from 'react';
import { Link } from 'react-router-dom';
import './RegisterLogin.css';
import { FaUser, FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const RegisterForm = () => {
  return (
    <div className='wrapper'>
      <form action="">
        <h2>Register</h2>

        <div className="input-box">
          <FaUser className='icon'/>
          <input type="text" placeholder='Username' required/>
        </div>
        <div className="input-box">
          <MdEmail className='icon'/>
          <input type="email" placeholder='Email' required/>
        </div>
        <div className="input-box">
          <FaLock className='icon'/>
          <input type="password" placeholder='Password' required/>
        </div>
        <div className="input-box">
          <FaLock className='icon'/>
          <input type="password" placeholder='Confirm Password' required/>
        </div>

        <button type="submit">Register</button>

        <div className="login-link">
          <p>Already have an account?<Link to="/login">Login</Link></p>
        </div>
      </form>
    </div>
  )
}

export default RegisterForm;
