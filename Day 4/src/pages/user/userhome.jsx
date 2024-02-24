import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Usernav from './usernav'
import imageSrc from '../../assets/images/ldp.jpg'; // Import the image source
import Footer from './footer'

const userhome = () => {
  const backgroundStyle = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    padding: '0 20px',
  };

  const contentStyle = {
    textAlign: 'left',
    width: '50%',
    padding: '0 20px',
  };

  const imageStyle = {
    width: '40%',
    height: '50%',
    backgroundImage: `url(${imageSrc})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '30px',
    // Rounded corners for the image
  };
  const navigate = useNavigate();

  const enrollButtonStyle = {
    padding: '12px 24px', // Increased padding for the button
    // backgroundColor: '#007bff',
    backgroundColor: 'black',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '18px', // Increased font size for the button text
    cursor: 'pointer',
    textDecoration: 'none',
    marginTop: '20px',

    // transition: 'background-color 0.3s ease', // Smooth transition for hover effect
  };



  // Hover effect for the button
  const handleEnrollHover = (e) => {
    // e.target.style.backgroundColor = '#0056b3'; // Darker shade of blue on hover
  };

  const handleEnrollLeave = (e) => {
    // e.target.style.backgroundColor = '#007bff'; // Revert back to original color on hover out
  };

  const handleEnrollClick = () => {
    console.log('Enroll button clicked!');
    navigate('/Services')
  };

  return (
    <>
      <div>
        <Usernav />
      </div>
      <div style={backgroundStyle}>
        <div style={contentStyle}>
          <p style={{ fontSize: '44px', fontFamily: "Times New Roman", marginBottom: '20px', color: '#333' }}>Welcome to Health Care Website!</p>
          <p style={{ fontSize: '18px', marginBottom: '20px', color: '#666' }}>"Empowering individuals with accessible healthcare solutions through digital innovation."<br /><br />
            "Streamlining healthcare delivery and improving patient outcomes with technology-driven applications."</p>
          <center>
            <button
              style={enrollButtonStyle}
              onClick={handleEnrollClick}
              onMouseEnter={handleEnrollHover}
              onMouseLeave={handleEnrollLeave}
            >
              View Services

            </button>
          </center>
        </div>
        <div style={imageStyle}></div>
      </div>
      <div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default userhome;
