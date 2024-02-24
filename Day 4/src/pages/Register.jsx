/* eslint-disable react/no-unescaped-entities */
import '../assets/css/Register.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
const Register = () => {
    return (
        <div className='logrb'>

            <div className='wrapper'>
                <form action="">
                    <h2 style={{ textAlign: 'center' }}>Sign Up</h2>
                    <div className="input-box">
                        <input type="text" placeholder="Username" required />
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="email" placeholder="Email" required />
                        <MdEmail className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required />
                        <FaLock className='icon' />
                    </div>
                    <button type="submit">Sign Up</button>
                    <div className="register-link">
                        <p>Already have an account?  <a><Link to="/A-SignIn">Sign In</Link></a></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register