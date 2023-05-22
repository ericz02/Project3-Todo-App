"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useReducer } from "react";
import { registerUser } from "../utils/data.js";

const Register = () => {
  const router = useRouter();

  function reducer(state, action) {
    switch (action.type) {
      case "email":
      case "name":
      case "password":
      case "slug":
        return { ...state, [action.type]: action.value };
      case "loading":
        return { ...state, loading: action.loading };
      case "response":
        return { ...state, response: action.response };
    }

    throw Error("Unknown action." + action.type);
  }

  const initialState = {
    email: "",
    name: "",
    password: "",
    slug: "",
    response: "",
    loading: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { email, name, slug, password, response, loading } = state;

  const register = async (e) => {
    dispatch({ type: "loading", loading: true });
    e.preventDefault();
    console.log(initialState);

    const response = await registerUser(email, password, name, slug);
    dispatch({ type: "response", response });
    dispatch({ type: "loading", loading: false });
    if (response?.success) {
      setTimeout(() => {
        router.push("/login");
      }, 3000);
    }
  };

  return (
    <div className="flex justify-center items-center h-[610px]">
      <form className="w-1/3 p-6 bg-white rounded shadow" onSubmit={register}>
        <h2 className="text-2xl font-bold mb-6">Create Account</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-400 rounded"
            type="text"
            id="name"
            value={name}
            onChange={(e) => {
              dispatch({ type: "name", value: e.target.value });
            }}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-400 rounded"
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              dispatch({ type: "email", value: e.target.value });
            }}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-400 rounded"
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              dispatch({ type: "password", value: e.target.value });
            }}
          />
        </div>
        <button
          className="w-full bg-[#5B8AC7] hover:bg-[#37639D] text-white font-bold py-2 px-4 rounded mt-5"
          type="submit"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Register;
