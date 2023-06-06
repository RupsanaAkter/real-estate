import React from 'react';
import Hero from '../Hero/Hero';
import Featured from '../Featured/Featured';
import Recent from '../Recent/Recent';
import Award from '../Award/Award';
import Location from '../Location/Location';
import Team from '../Team/Team';


const Home = () => {
    return (
        <>
        <Hero></Hero>
        <Featured></Featured>
        <Recent></Recent>
        <Award></Award>
        <Location></Location>
        <Team></Team>
        {/* <Team />
        <Price />  */}
      </>
    );
};

export default Home;