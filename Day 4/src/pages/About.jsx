import React from 'react';
import '../assets/css/about.css';
import Usernav from './user/usernav';

function Services() {
  return (
    <>
      <Usernav></Usernav>
      <div className='serb2'>
        <h1>About us</h1>
        <div className='sec1'>
          <div className='sp1'>
            <div className='sph'><p>Counseling for Elders</p></div><br />
            Counseling for elderly individuals is a crucial aspect of holistic geriatric care, addressing their unique emotional, psychological, and social needs.
            Elderly individuals often face a multitude of challenges including loss of loved ones, declining health, isolation, and transitions into retirement or assisted living.
            <br /><br />
            Moreover, counseling for the elderly involves not only individual sessions but also family therapy and support groups, recognizing the importance of familial relationships and social networks in their lives.
            Family therapy sessions can facilitate communication, resolve conflicts, and strengthen familial bonds, thereby improving the overall support system for elderly individuals.
          </div>
          <div className='si1'>
            <img src='/src/assets/images/si1.jpg' alt='Counseling Image' />
          </div>
        </div>

        <br /><br /><br />
        <div className='sec1'>
          <div className='sp1'>
            <div className='sph'><p>Personal Care</p></div><br />
            Personal care for elderly individuals is a comprehensive approach that encompasses various aspects to ensure their well-being and comfort in their daily lives.
            This care involves assistance with fundamental activities such as bathing, dressing, and grooming, which may become challenging due to physical limitations or health conditions associated with aging.
            <br /><br />
            Beyond physical tasks, personal care also entails emotional support and companionship, fostering a trusting and compassionate relationship between the caregiver and the elderly person.
          </div>
          <div className='si1'>
            <img src='/src/assets/images/si2.jpg' alt='Counseling Image' />
          </div>
        </div>

        <br /><br /><br />
        <div className='sec1'>
          <div className='sp1'>
            <div className='sph'><p>Personal Care</p></div><br />
            Personal care for elderly individuals is a comprehensive approach that encompasses various aspects to ensure their well-being and comfort in their daily lives.
            This care involves assistance with fundamental activities such as bathing, dressing, and grooming, which may become challenging due to physical limitations or health conditions associated with aging.
            <br /><br />
            Beyond physical tasks, personal care also entails emotional support and companionship, fostering a trusting and compassionate relationship between the caregiver and the elderly person.
          </div>
          <div className='si1'>
            <img src='/src/assets/images/si3.jpg' alt='Counseling Image' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
