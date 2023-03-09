import React from 'react';
import Header from './Header';
import About from './About';
import Service from './Service';
import Project from './Project';
import Title from '../../Title';
import Contack from './Contack';
import Navbar from '../../navigation/Navbar';
import ServiceFeatures from './ServiceFeatures';
import PricePlaningComponent from '../../shareComponet/CopyComponent';

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <ServiceFeatures />
      <Service Title={Title} />
      <Project Title={Title} />
      <Contack />
      {/* <PricePlaningComponent/> */}
    </>
  );
};

export default Home;
