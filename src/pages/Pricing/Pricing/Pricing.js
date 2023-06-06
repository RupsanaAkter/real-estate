import React from 'react';
import Back from '../../Shared/Back/Back';
import PriceCard from '../../Home/Price/PriceCard';
import img from "../../../assets/images/pricing (1).jpg"
const Pricing = () => {
    return (
        <div>
             <section className='pricing mb'>
        <Back name='30 days money back guarantee' title='No Extra Fees. Friendly Support' cover={img} />
        <div className='price container'>
          <PriceCard />
        </div>
      </section>
        </div>
    );
};

export default Pricing;