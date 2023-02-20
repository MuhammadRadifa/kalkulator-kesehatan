import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { TypeAnimation } from 'react-type-animation';

const Test = () => {
  const { state } = useContext(GlobalContext);
  console.log(state);
  const { data } = state;
  return (
    <div>
      <TypeAnimation
        sequence={[
          'One', // Types 'One'
          1000, // Waits 1s
          'Two', // Deletes 'One' and types 'Two'
          2000, // Waits 2s
          'Two Three', // Types 'Three' without deleting 'Two'
          () => {
            console.log('Done typing!'); // Place optional callbacks anywhere in the array
          },
        ]}
        wrapper='div'
        cursor={true}
        repeat={Infinity}
        className='font-black'
      />
    </div>
  );
};

export default Test;
