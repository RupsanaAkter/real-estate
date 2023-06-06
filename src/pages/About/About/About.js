import React from 'react';
import Heading from '../../Shared/Heading/Heading';
import img from '../../../assets/images/about (1).jpg'
import immio from '../../../assets/images/immio.jpg'
import Back from '../../Shared/Back/Back';
import './About.css'
const About = () => {
    return (
        <div>
             <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src={immio} alt='' />
          </div>
        </div>
      </section>
        </div>
    );
};

export default About;