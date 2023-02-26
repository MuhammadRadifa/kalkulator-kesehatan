import React from 'react';

import { Hero, Kontak, Layanan, Tentang } from '../../components';

import { Homepagelayout } from '../../layout';

const HomepagePages = () => {
  document.title = 'Home';
  return (
    <div>
      <Homepagelayout>
        <Hero />
        <Tentang />
        <Layanan />
        <Kontak />
      </Homepagelayout>
    </div>
  );
};

export default HomepagePages;
