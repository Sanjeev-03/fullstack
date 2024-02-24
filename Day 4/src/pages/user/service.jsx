import React from 'react';
import '../../assets/css/service.css'
// import '../../assets/images/health care.jpg'
import Usernav from './usernav'
const PageWithCards = () => {
    return (
        <>
            <Usernav />
            <div className="page">

                <h1>Available Services</h1>
                <div className="card-container">
                    <div className="card">
                        {/* <img src="../../assets/images/health care.jpg" alt="Health Care" /> */}
                        <br /><br />
                        <center>
                            <p style={{ fontSize: '25px' }}>Health Care</p>
                        </center>
                        <br />
                        <button>Enroll</button>
                    </div><div className="card">
                        {/* <img src="/src/assets/images/dm.png" alt="Leisture care" /> */}
                        <br /><br />
                        <center>
                            <p style={{ fontSize: '25px' }}>Leisture care</p>
                        </center>
                        <br />
                        <button>Enroll</button>
                    </div><div className="card">
                        {/* <img src="/src/assets/images/its.png" alt="Physiotherapy Home Services" /> */}
                        <br /><br />
                        <center>
                            <p style={{ fontSize: '25px' }}>Physiotherapy Home Services</p>
                        </center>
                        <br />
                        <button>Enroll</button>
                    </div>
                    <div className="card">
                        {/* <img src="/src/assets/images/ux.jpg" alt="Daily Care" /> */}
                        <br /><br />
                        <center>
                            <p style={{ fontSize: '25px' }}>Daily Care</p>
                        </center>
                        <br />
                        <button>Enroll</button>
                    </div><div className="card">
                        {/* <img src="/src/assets/images/ml.jpg" alt="Accounting Care" /> */}
                        <br /><br />
                        <center>
                            <p style={{ fontSize: '25px' }}>Accounting Care</p>
                        </center>
                        <br />
                        <button>Enroll</button>
                    </div><div className="card">
                        {/* <img src="/src/assets/images/ds.jpg" alt="Emergency Care" /> */}
                        <br /><br />
                        <center>
                            <p style={{ fontSize: '25px' }}>Emergency Care</p>
                        </center>
                        <br />
                        <button>Enroll</button>
                    </div>
                </div>
            </div>

            {/* <Foot/> */}
        </>
    );
};

export default PageWithCards;