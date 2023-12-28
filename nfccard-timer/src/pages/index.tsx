import CountdownTimer from "@/components/Countdown";
import TodoItem, { Todo } from "@/components/TodoTimerCard";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import getRandomImage from "@/components/RambleImage";
import TodoForm from "@/components/TodoForm";
import TodoListForm from "@/components/TodoListForm";

export default function Home() {
  const [animationStart, setAnimationStart] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todoItemList, setTodoList] = useState<Todo[]>([]);
  const randomImagePath = getRandomImage();
  const [currentImage, setCurrentImage] = useState(getRandomImage());
  let wakeLock: WakeLockSentinel | null = null;

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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addTodo = (todo: Todo) => {
    setTodoList((prevTodoList: Todo[]) => [...prevTodoList, todo]);
    closeModal();
  };
  useEffect(() => {
    const requestWakeLock = async () => {
      try {
        if (document.visibilityState === "visible") {
          wakeLock = await navigator.wakeLock.request("screen");
          console.log("Wake Lock acquired");
        } else {
          console.warn("Page is not visible. Wake Lock request skipped.");
        }
      } catch (err: any) {
        if (err instanceof Error) {
          console.error("Unable to acquire Wake Lock:", err.name, err.message);
        } else {
          console.error("Unable to acquire Wake Lock: Unknown error");
        }
      }
    };
    requestWakeLock();

    const interval = setInterval(() => {
      if (animationStart) {
        startAnimation();
      }
    }, 10000);

    const releaseWakeLock = () => {
      if (wakeLock) {
        wakeLock.release().then(() => {
          console.log("Wake Lock released");
        });
        wakeLock = null;
      }
    };

    const keepWakeLock = () => {
      setTimeout(() => {
        releaseWakeLock();
      }, 1000 * 60 * 60 * 5); // 5 hours
    };

    if (document.visibilityState === "visible") {
      requestWakeLock();
      keepWakeLock();
    } else {
      console.warn("Page is not visible. Wake Lock request skipped.");
    }

    return () => {
      clearInterval(interval);
    };
  }, [animationStart]);



  return (
    <div className="bg-gradient-to-b from-cyan-500 via-sky-600 to-blue-900 min-w-screen min-h-screen relative overflow-hidden">
      <div className="bubbles">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>
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
      <TodoItem title={"テスト"} content={"テスト"} status={"Done"} id={0}/>
      <TodoListForm />
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
        <button onClick={openModal}>
          <Image src="/addMark.png" alt="plus-button" width="32" height="32" />
        </button>
      </div>

      {/* モーダルの表示 */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <TodoForm addTodoOnclick={addTodo} />
          <button className="absolute bottom-4 right-2" onClick={closeModal}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}
