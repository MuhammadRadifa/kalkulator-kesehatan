import React, { useEffect } from 'react';
import { Footer, Navbar } from '../../components';
import 'aos/dist/aos.css';
import Aos from 'aos';

const Homepage = ({ children }) => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Homepage;
