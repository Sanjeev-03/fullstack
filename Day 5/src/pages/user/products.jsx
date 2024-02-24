import React from 'react';
import '../../assets/css/service.css'
// import '../../assets/images/health care.jpg'
import Usernav from './usernav'
const products = () => {
    return (
        <>
            <Usernav />
            <div className="page">

                <h1>Our Products</h1>
                <div className="card-container">
                    <div className="card">
                        {/* <img src="../../assets/images/health care.jpg" alt="Health Care" /> */}
                        <br /><br />
                        <center>
                            <p style={{ fontSize: '25px' }}></p>
                        </center>
                        <br />
                        <button>Buy</button>
                    </div><div className="card">
                        {/* <img src="/src/assets/images/dm.png" alt="Leisture care" /> */}
                        <br /><br />
                        <center>
                            <p style={{ fontSize: '25px' }}>Bath Brush</p>
                        </center>
                        <br />
                        <button>Buy</button>
                    </div><div className="card">
                        {/* <img src="/src/assets/images/its.png" alt="Physiotherapy Home Services" /> */}
                        <br /><br />
                        <center>
                            <p style={{ fontSize: '25px' }}>Adult diapers</p>
                        </center>
                        <br />
                        <button>Buy</button>
                    </div>
                    <div className="card">
                        {/* <img src="/src/assets/images/ux.jpg" alt="Daily Care" /> */}
                        <br /><br />
                        <center>
                            <p style={{ fontSize: '25px' }}>Daily Care</p>
                        </center>
                        <br />
                        <button>Buy</button>
                    </div><div className="card">
                        {/* <img src="/src/assets/images/ml.jpg" alt="Accounting Care" /> */}
                        <br /><br />
                        <center>
                            <p style={{ fontSize: '25px' }}>Accounting Care</p>
                        </center>
                        <br />
                        <button>Buy</button>
                    </div><div className="card">
                        {/* <img src="/src/assets/images/ds.jpg" alt="Emergency Care" /> */}
                        <br /><br />
                        <center>
                            <p style={{ fontSize: '25px' }}>Emergency Care</p>
                        </center>
                        <br />
                        <button>Buy</button>
                    </div>
                </div>
            </div>

            {/* <Foot/> */}
        </>
    );
};

export default products;