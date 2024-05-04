import React, { useState, useEffect } from 'react';

function CountdownTimer({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear timeout if the component is unmounted or if the target date is reached
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  let prevShown = false;
  Object.keys(timeLeft).forEach((interval, index) => {
    if (!timeLeft[interval] && !prevShown) {
      return;
    } else {
        prevShown = true;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{' '}
      </span>
    );
  });

  return (
    <div>
      {timerComponents.length ? timerComponents : <span>Countdown expired!</span>}
    </div>
  );
}

export default CountdownTimer;