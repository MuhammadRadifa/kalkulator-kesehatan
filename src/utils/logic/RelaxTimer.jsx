import { useContext, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

const RelaxTimer = ({ durasi, isPaused }) => {
  const { handler } = useContext(GlobalContext);
  const { useInterval, twoDigits } = handler;
  const [timeLeft, setTimeLeft] = useState(durasi);
  const [intervalId, setIntervalId] = useState(null);

  // useEffect(() => {
  //   if (!isPaused && timeLeft > 0) {
  //     const id = setInterval(() => {
  //       setTimeLeft((prevState) => prevState - 1);
  //     }, 1000);
  //     setIntervalId(id);
  //   } else if (isPaused) {
  //     clearInterval(intervalId);
  //   }
  //   return () => clearInterval(intervalId);
  // }, []);

  useInterval(
    () => {
      if (timeLeft > 0) {
        setTimeLeft((prevState) => prevState - 1);
      }
    },
    isPaused ? null : 1000
    // passing null stops the interval
  );

  const menit = Math.floor(timeLeft / 60);
  const detik = timeLeft % 60;

  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 text-5xl font-semibold'>
      <p>
        {twoDigits(menit)}:{twoDigits(detik)}
      </p>
    </div>
  );
};

export default RelaxTimer;
