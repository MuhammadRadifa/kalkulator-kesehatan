import React from 'react';
import { FormMeditasi } from '../../components';
import { Aplikasi } from '../../layout';

const AplikasiMeditasi = () => {
  document.title = 'Meditasi';
  return (
    <div>
      <Aplikasi>
        <FormMeditasi />
      </Aplikasi>
    </div>
  );
};

export default AplikasiMeditasi;
