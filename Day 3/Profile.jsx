import '../../assets/css/profile.css';
// import UserNavbar from "./UserNavbar";
import Uprofile from '../../assets/images/profile.jpg';
import styled from '@emotion/styled';
import { Avatar } from '@mui/material';
import Usernav from './usernav'

const BorderedAvatar = styled(Avatar)`
   border: 3px solid lightseagreen;
`;
const UserProfile = () => {
    return (
        <>
            <Usernav></Usernav>
            <div className="u-profile">
                <header>
                    {/* <UserNavbar /> */}
                </header>
                <main>
                    <div className='profile-container'>
                        <div className='profile-home-top ' style={{ padding: '30px' }}>
                            {/*Profile-left */}
                            <div className='profile-pic'>
                                <BorderedAvatar sx={{ width: 150, height: 150 }} src={Uprofile} alt='' />
                            </div>

                            {/*Profile-right */}
                            <div className='profile-rgt'>
                                <div className='profile-Details'>
                                    <ul>
                                        <li>Name  :  Draco Malfoy  </li>
                                        <li>Email  :  sk7yolo@gmail.com</li>
                                        <li>ContactNo  :  9876543210</li>
                                        <li>Location  :  Coimbatore</li>

                                    </ul>
                                </div>


                            </div>


                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default UserProfile