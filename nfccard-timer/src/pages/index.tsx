import CountdownTimer from "@/components/Countdown";
import TodoForm from "@/components/TodoForm";
import TodoItem from "@/components/TodoTimerCard";
import React from "react";
import Image from "next/image";

export default function Home(this: any) {
  return (
    <div className="bg-gradient-to-b from-cyan-500 via-sky-600 to-blue-900 min-w-screen min-h-screen">
      <h1 className="text-xl font-bold text-yellow-500">Hello World</h1>
      <h1 className="text-xl font-bold text-lime-300">Hello World</h1>
      <CountdownTimer />
      <TodoItem />
      <TodoItem />
      <div className="fixed right-4 bottom-4">
        <Image src="/addMark.png" alt="plus-button" width="32" height="32" />
      </div>
    </div>
  );
}
