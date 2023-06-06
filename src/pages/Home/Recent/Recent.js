import React from 'react';
import RecentCard from './RecentCard';
import Heading from '../../Shared/Heading/Heading';
import './Recent.css'
const Recent = () => {
    return (
        <div>
             <section className='recent padding'>
        <div className='container'>
          <Heading title='Recent Property Listed' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />
          <RecentCard/>
        </div>
      </section>
        </div>
    );
};

export default Recent;