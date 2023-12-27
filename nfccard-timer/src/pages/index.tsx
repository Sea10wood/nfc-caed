import CountdownTimer from "@/components/Countdown";
import TodoForm from "@/components/TodoForm";
import TodoItem from "@/components/TodoTimerCard";
import React, { useState } from "react";
import Image from "next/image";

export default function Home(this: any) {
  const [animationStart, setAnimationStart] = useState(false);
  return (
    <div className="bg-gradient-to-b from-cyan-500 via-sky-600 to-blue-900 min-w-screen min-h-screen">
      <div
        className={`transition-transform duration-1000 ease-linear ${
          animationStart ? "opacity-100 animate-slideLeftToRight" : "opacity-0"
        }`}
      >
        <Image
          src="/HTTPCAT/HTTP_499.avi"
          alt="499"
          width="100"
          height="100"
        />
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
