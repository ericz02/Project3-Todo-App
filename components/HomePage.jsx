// home page
"use client";

import Image from "next/image";
import Link from "next/link";
import TodoList from '../components/TodoList';


const HomePage = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <Image
          className="w-[100%] h-[700px] object-cover"
          src="/images/background.jpg"
          alt="My Image"
          width={1500}
          height={1000}
        />

        <h1
          className="absolute text-center top-1/3 left-1/2 transform -translate-x-1/2 -
              translate-y-1/2 text-white text-6xl text-neutral-700"
        >
          Stay organized, boost productivity, and never miss a task.
        </h1>

        <Link href="/login">
          <button
            className="absolute top-3/4 left-1/2 transform -translate-x-1/2 
                  -translate-y-1/ z-10 bg-text-white bg-gradient-to-r from-cyan-500 to-blue-500
                  hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800
                  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
          >
            Get Started
          </button>
        </Link>
      </div>
      <div className="mb-4">
        <TodoList />
      </div>
    </div>
  );
};


export default HomePage;
