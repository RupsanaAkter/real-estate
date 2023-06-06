import React from 'react';
import { featured } from '../../../Data/data';
import h1 from '../../../assets/images/h1.png'
import h2 from '../../../assets/images/h2.png'
import h3 from '../../../assets/images/h3.png'
const FeaturedCard = () => {
    return (
        <div>
             <div className='content grid5 mtop'>
        {featured.map((items, index) => (
          <div className='box' key={index}>
            {/* <img src={items.cover} alt='' /> */}
           <img src={items.cover} alt="" />
            <h4>{items.name}</h4>
            <label>{items.total}</label>
          </div>
        ))}
      </div>
        </div>
    );
};

export default FeaturedCard;