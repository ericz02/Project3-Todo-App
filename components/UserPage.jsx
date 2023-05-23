"use client";

import useUser from "@/hooks/useUser";
import useUserMustBeLogged from "@/hooks/userUserMustBeLogged";
import { useState } from "react";
import TodoList from "./TodoList";
import { usePathname } from "next/navigation";

const UserPage = () => {
  const { user } = useUser();
  // console.log(user);

  console.log(user);

  return (
    <div className="h-screen mt-[150px] overflow-auto">
      <h1 className="text-8xl text-center text-shadow text-secondary">
        User Page
      </h1>
    </div>
  );
};

export default UserPage;
