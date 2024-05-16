import React, { useState, useEffect } from 'react';
import style1 from "C:\\Users\\SANTHOSH\\Desktop\\New folder (2)\\My ReactProject\\portfolio\\src\\Google.module.css";

const Google = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const update = ()=> {
      const currentYear = new Date().getFullYear();
      const newYear = new Date(`January 1 ${currentYear + 1} 00:00:00`);
      const currentDate = new Date();
      const diff = newYear - currentDate;

      const days = Math.floor(diff / 1000 / 60 / 60 / 24);
      const hours = Math.floor((diff / 1000 / 60 / 60) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({
        days: days < 10 ? "0" + days: days,
        hours: hours < 10 ? "0" + hours : hours,
        minutes: minutes < 10 ? "0" + minutes : minutes,
        seconds: seconds < 10 ? "0" + seconds : seconds,
      });
    };

    update();
    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={style1.body}>
      <p>Countdown to</p>
      <h2>NEW YEAR</h2>
      <div className={style1.div}>
        <div className={style1.box}>
          <div id="day">{timeLeft.days}</div>
          <h3>Days</h3>
        </div>
        <div className={style1.box}>
          <div id="hours">{timeLeft.hours}</div>
          <h3>Hours</h3>
        </div>
        <div className={style1.box}>
          <div id="min">{timeLeft.minutes}</div>
          <h3>Minutes</h3>
        </div>
        <div className={style1.box}>
          <div id="sec">{timeLeft.seconds}</div>
          <h3>Seconds</h3>
        </div>
      </div>
    </div>
  );
};

export default Google;
