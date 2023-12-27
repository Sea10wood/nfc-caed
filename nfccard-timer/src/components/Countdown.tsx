import React, { useEffect, useState } from "react";

const CountdownTimer: React.FC = () => {
  const [timer, setTimer] = useState({
    seconds: "00",
    minutes: "00",
    hours: "00",
    days: "00",
  });

  useEffect(() => {
    const beerTime = new Date("January 1, 2024 00:00:00").getTime();

    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const distance = beerTime - now;

      const days = padNum(Math.floor(distance / (1000 * 60 * 60 * 24)));
      const hours = padNum(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      const minutes = padNum(
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      );
      const seconds = padNum(Math.floor((distance % (1000 * 60)) / 1000));

      setTimer({
        seconds,
        minutes,
        hours,
        days,
      });

      // Stop
      if (distance < 0) {
        clearInterval(countdown);
        setTimer({
          seconds: "00",
          minutes: "00",
          hours: "00",
          days: "00",
        });
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const padNum = (num: number) => {
    let zero = "";
    for (let i = 0; i < 2; i++) {
      zero += "0";
    }
    return (zero + num).slice(-2);
  };

  return (
    <div className=" items-center justify-center px-2 py-2 ">
      <div className="text-cyan-500 bg-white rounded-lg font-bold ">
        <div className="text-4xl text-center flex w-full items-center justify-center">
          <div className="text-2xl mr-1 font-light">2023年残り</div>

          <div className="font-mono leading-none">{timer.days}</div>

          <div className="text-2xl mr-1 font-extralight">日</div>

          <div className="font-mono leading-none">{timer.hours}</div>

          <div className="text-2xl mr-1 font-extralight">時間</div>

          <div className="font-mono leading-none">{timer.minutes}</div>

          <div className="text-2xl mr-1 font-extralight">分</div>

          <div className="font-mono leading-none">{timer.seconds}</div>

          <div className="text-2xl mr-1 font-extralight">秒</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
