import React from 'react';
import '../assets/css/Login.css'
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <div className='logb'>
      <div className='wrapper'>
        <form action="">
          <h2 style={{ textAlign: 'center', color: 'black' }}>Login</h2>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <FaUser className='icon' />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FaLock className='icon' />
          </div>
          <div className="remember-forgot">
            <label><input type="checkbox" /> Remember me</label>
            <a href="#" >Forgot Password</a>
          </div>
          <button type="submit"><a><Link to="/Log-submit">Login</Link></a></button>
          <div className="register-link">
            <p>Don't have an account?  <a><Link to="/register">Register</Link></a></p>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Login;
