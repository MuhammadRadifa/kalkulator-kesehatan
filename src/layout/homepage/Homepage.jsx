import React from 'react';
import { Navbar } from '../../components';

const Homepage = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Homepage;
