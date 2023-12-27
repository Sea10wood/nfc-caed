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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(getRandomImage());
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div className="bg-gradient-to-b from-cyan-500 via-sky-600 to-blue-900 min-w-screen min-h-screen relative overflow-hidden">
      <div className={`py-2 transition-opacity duration-1000 ease ${animationStart ? "opacity-100 animate-slideLeftToRight" : "opacity-0"}`}>
        <Image src={currentImage} alt="HTTPCAT" width={100} height={100} />
      </div>
      <CountdownTimer />
      <TodoItem />
      <TodoItem />
      <div className="fixed right-4 bottom-12">
        <button
          onClick={() => {
            setAnimationStart(true);
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
