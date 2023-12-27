import CountdownTimer from "@/components/Countdown";
import React from "react";

export default function Home(this: any) {
  return (
    <div className="bg-gradient-to-b from-cyan-500 via-sky-600 to-blue-900 h-320">
      <h1 className="text-xl font-bold text-yellow-500">Hello World</h1>
      <h1 className="text-xl font-bold text-lime-300">Hello World</h1>
      <CountdownTimer />
    </div>
  );
}
