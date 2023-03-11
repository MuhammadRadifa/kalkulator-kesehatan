import React from 'react';
import { FormKalkulatorKebahagiaan } from '../../components';
import { Aplikasi } from '../../layout';

const AplikasiKebahagiaan = () => {
  document.title = 'Kalkulator Kebahagiaan';
  return (
    <div>
      <Aplikasi>
        <FormKalkulatorKebahagiaan />
      </Aplikasi>
    </div>
  );
};

export default AplikasiKebahagiaan;
