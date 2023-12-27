import CountdownTimer from "@/components/Countdown";
import TodoForm from "@/components/TodoForm";
import TodoItem from "@/components/TodoTimerCard";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import getRandomImage from "@/components/RambleImage";

export default function Home() {
  const [animationStart, setAnimationStart] = useState(false);
  const randomImagePath = getRandomImage();
  const [currentImage, setCurrentImage] = useState(getRandomImage());

  const startAnimation = () => {
    setAnimationStart(true);
    setTimeout(() => {
      setAnimationStart(false);
      setCurrentImage(getRandomImage());
      setTimeout(() => {
        setAnimationStart(true);
      }, 1000);
    }, 10000);
  };

  useEffect(() => {
    let wakeLock: WakeLockSentinel;

    const requestWakeLock = async () => {
      try {
        wakeLock = await navigator.wakeLock.request("screen");
        console.log("Wake Lock acquired");
      } catch (err: any) {
        if (err instanceof Error) {
          console.error("Unable to acquire Wake Lock:", err.name, err.message);
        } else {
          console.error("Unable to acquire Wake Lock: Unknown error");
        }
      }
    };
    

    const interval = setInterval(() => {
      if (animationStart) {
        startAnimation();
      }
    }, 10000);

    requestWakeLock();

    return () => {
      clearInterval(interval);
      if (wakeLock) {
        wakeLock.release().then(() => {
          console.log("Wake Lock released");
        });
      }
    };
  }, [animationStart]);

  return (
    <div className="bg-gradient-to-b from-cyan-500 via-sky-600 to-blue-900 min-w-screen min-h-screen relative overflow-hidden">
      <div
        className={`py-2 transition-opacity duration-1000 ease ${
          animationStart ? "opacity-100 animate-slideLeftToRight" : "opacity-0"
        }`}
      >
        <Image
          src={currentImage}
          alt="HTTPCAT"
          width={100}
          height={100}
          className="rounded-md"
        />
      </div>
      <CountdownTimer />
      <TodoItem />
      <TodoItem />
      <div className="fixed right-4 bottom-12">
        <button
          onClick={() => {
            startAnimation();
          }}
        >
          <Image src="/cat.png" alt="cat-button" width="32" height="32" />
        </button>
      </div>
      <div className="fixed right-4 bottom-4">
        <Image src="/addMark.png" alt="plus-button" width="32" height="32" />
      </div>
    </div>
  );
}
