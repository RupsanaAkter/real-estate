import React from 'react';
import Hero from '../Hero/Hero';
import Featured from '../Featured/Featured';
import Recent from '../Recent/Recent';

const Home = () => {
    return (
        <>
        <Hero></Hero>
        <Featured></Featured>
        <Recent></Recent>
        {/* <Hero />
        <Featured />
        <Recent />
        <Awards />
        <Location />
        <Team />
        <Price /> */}
      </>
    );
};

export default Home;