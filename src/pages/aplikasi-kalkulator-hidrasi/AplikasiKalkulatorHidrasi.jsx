import React from 'react';
import { FormKalkulatorHidrasi } from '../../components';
import { Aplikasi } from '../../layout';

const AplkasiHidrasi = () => {
  document.title = 'Kalkulator Hidrasi';
  return (
    <div>
      <Aplikasi>
        <FormKalkulatorHidrasi />
      </Aplikasi>
    </div>
  );
};

export default AplkasiHidrasi;
