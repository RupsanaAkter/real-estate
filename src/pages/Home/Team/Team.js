import React from 'react';
import { team } from '../../../Data/data';
import Heading from '../../Shared/Heading/Heading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faLocationDot } from '@fortawesome/free-regular-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import './Team.css'
const Team = () => {
    return (
        <div>
               <section className='team background'>
        <div className='container'>
          <Heading title='Our Featured Agents' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />

          <div className='content mtop grid3'>
            {team.map((val, index) => (
              <div className='box' key={index}>
                <button className='btn3'>{val.list} Listings</button>
                <div className='details'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    <i className='fa-solid fa-circle-check'><FontAwesomeIcon icon={faCircleCheck} /></i>
                  </div>
                  {/* <i className='fa fa-location-dot'><FontAwesomeIcon icon={faLocationDot} /></i> */}
                  <label>{val.address}</label>
                  <h4>{val.name}</h4>

                  {/* <ul>
                    {val.icon.map((icon, index) => (
                      <li key={index}>{icon}</li>
                    ))}
                  </ul> */}
                  <div className='button flex'>
                    <button>
                      <i className='fa fa-envelope'> <FontAwesomeIcon icon={faEnvelope} /></i>
                      Message
                    </button>
                    <button className='btn4'>
                      <i className='fa fa-phone-alt'><FontAwesomeIcon icon={faPhoneAlt} /></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
        </div>
    );
};

export default Team;