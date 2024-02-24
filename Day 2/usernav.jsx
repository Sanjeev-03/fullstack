import '/src/assets/css/usernav.css';
// import RoofingIcon from '@mui/icons-material/Roofing';
// import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import logoimg from '../../assets/images/logo.png'

const Usernav = () => {
    return (
        <div className='usernav-container'> {/* Add this line */}
            <div className="navbar">
                {/* <div style={{ width={200} }}> */}
                <img src={logoimg} alt='logo' width={200} />
                {/* </div> */}
                <div className='unal'>
                    <ul>
                        <Link to='/user-Home' style={{ color: 'black' }}><li>Home</li></Link>
                        <Link to='/user-Product' style={{ color: 'black' }}><li>Product</li></Link>
                        <Link to='/user-Service' style={{ color: 'black' }}><li>Service</li></Link>
                        <Link to='/user-About' style={{ color: 'black' }}><li>About</li></Link>
                        <Link to='/user-Profile' style={{ color: 'black' }}><li>Profile</li></Link>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Usernav;
