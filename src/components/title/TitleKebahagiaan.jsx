import React from 'react';
import { EmojiOK } from '../../assets';
import { FormTitle } from '../../layout';

const TitleKebahagiaan = ({ status }) => {
  return (
    <FormTitle status={status}>
      <img src={EmojiOK} alt='Kalkulator' className='mb-9' />
      <h1 className='mb-9 text-5xl font-semibold text-gray-700'>Kalkulator Kebahagiaan</h1>
      <p className='text-slate-400'>
        Kalkulator kebahagiaan adalah aplikasi yang dapat membantu Anda mengidentifikasi aspek kehidupan yang membawa
        kebahagiaan dan memberikan saran untuk meningkatkan kualitas hidup Anda.
      </p>
    </FormTitle>
  );
};

export default TitleKebahagiaan;
