import React, { useEffect, useState } from "react";

const CountdownClock = () => {
  const staticTimestamp = 1711786589000;
  const [remainingTime, setRemainingTime] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = Date.now();
      const remaining = staticTimestamp - currentTime;
      setRemainingTime(remaining > 0 ? remaining : 0);
    }, 1000);

    return () => clearInterval(interval);
  }, [staticTimestamp]);

  const calculateCountdown = (time: number) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = calculateCountdown(
    remainingTime || 0
  );

  return (
    <>
      {remainingTime !== null && (
        <>
          <div className="time-count day">
            <span>{days}</span>days
          </div>
          <div className="time-count hour">
            <span>{hours}</span>hours
          </div>
          <div className="time-count min">
            <span>{minutes}</span>mins
          </div>
          <div className="time-count sec">
            <span>{seconds}</span>secs
          </div>
        </>
      )}
    </>
  );
};

export default CountdownClock;
