'use client'
import { useContext } from 'react';
import './Hero.scss';
import { PopupContext } from '@/context/PopupContext/PopupContext';
import PersonalInfo from '@/components/dialogs/PersonalInfo';

export default function Hero() {
  const {openPopup} = useContext(PopupContext);
  
  const handleOpenPopup = () => {
    openPopup(<PersonalInfo />);
  };

  return (
    <section className='banner_hero' id="hero_section">
      <div className='banner_container'>
        <div className='info_sect'>
          <h1>Hi! I&apos;m Haru Tejada,</h1>
          <h2>Web Developer</h2>
          <h3>
            Full Stack Developer
          </h3>

          <button onClick={handleOpenPopup}>
            Contact me
          </button>
        </div>
        
        <div className='img_container'>
          <img src="https://as1.ftcdn.net/v2/jpg/05/74/26/68/1000_F_574266873_vhv00QksxhRPgy0cEeWTE15ImuhTEu7e.jpg" alt="" />
        </div>
      </div>
      <div className='floating_btn'>
        <i className="fi fi-br-chevron-double-down"></i>
      </div>
    </section>
  );
}
  