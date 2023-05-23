"use client";

import Link from "next/link";
import { useState } from "react";
import useUser from "../hooks/useUser";

const Navbar = () => {
  const { user, logout } = useUser();

  return (
    <nav className="flex justify-between items-center p-[2rem] bg-[#5B8AC7]">
      <div className="">
        <h1 className="text-[25px] text-neutral-100 hover:cursor-pointer">
          <Link href={"/"}>
            <strong>Awesome</strong>Todo
          </Link>
        </h1>
      </div>

      <ol className="flex gap-8">
        {user ? (
          <>
            <Link href={"/todo"}>
              <li className="text-neutral-100 hover:text-[#37639D] hover:cursor-pointer">
                Profile
              </li>
            </Link>

            <Link href={"/logout"}>
              <li className="text-neutral-100 hover:text-[#37639D] hover:cursor-pointer">
                Logout
              </li>
            </Link>
          </>
        ) : (
          <>
            <Link href={"/login"}>
              <li className="text-neutral-100 hover:text-[#37639D] hover:cursor-pointer">
                Login
              </li>
            </Link>
            <Link href={"/register"}>
              <li className="text-neutral-100 hover:text-[#37639D] hover:cursor-pointer">
                Register
              </li>
            </Link>
          </>
        )}
      </ol>
    </nav>
  );
};

export default Navbar;
