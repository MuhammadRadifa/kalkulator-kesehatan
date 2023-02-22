import React from 'react';
import { FormKalkulatorBMI } from '../../components';
import { Aplikasi } from '../../layout';

const AplikasiBMI = () => {
  document.title = 'Kalkulator BMI';
  return (
    <div>
      <Aplikasi>
        <FormKalkulatorBMI />
      </Aplikasi>
    </div>
  );
};

export default AplikasiBMI;
