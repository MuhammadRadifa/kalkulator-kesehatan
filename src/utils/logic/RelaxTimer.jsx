import { useEffect, useState } from 'react';

const RelaxTimer = ({ durasi, isPaused }) => {
  const [timeLeft, setTimeLeft] = useState(durasi);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (!isPaused && timeLeft > 0) {
      const id = setInterval(() => {
        setTimeLeft((prevState) => prevState - 1);
      }, 1000);
      setIntervalId(id);
    } else if (isPaused) {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, []);

  const menit = Math.floor(timeLeft / 60);
  const detik = timeLeft % 60;

  return (
    <div>
      <p>{menit}</p>
      <p>{detik}</p>
    </div>
  );
};

export default RelaxTimer;
