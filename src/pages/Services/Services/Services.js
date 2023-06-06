import React from 'react';
import Back from '../../Shared/Back/Back';
import img from '../../../assets/images/services (1).jpg'
import FeaturedCard from '../../Home/Featured/FeaturedCard';
const Services = () => {
    return (
        <div>
            <section className='services mb'>
        <Back name='Services' title='Services -All Services' cover={img} />
        <div className='featured container'>
          <FeaturedCard />
        </div>
      </section>
        </div>
    );
};

export default Services;