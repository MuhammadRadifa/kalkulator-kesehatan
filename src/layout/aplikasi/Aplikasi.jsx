import React from 'react';
import { Footer, Sidebar } from '../../components';

const Aplikasi = ({ children }) => {
  return (
    <div>
      <Sidebar />
      {children}
      <Footer />
    </div>
  );
};

export default Aplikasi;
