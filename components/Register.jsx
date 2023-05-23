"use client";

import { useRouter } from "next/navigation";
import { useReducer } from "react";
import { registerUser } from "../utils/data.js";

const Register = () => {
  const router = useRouter();

  function reducer(state, action) {
    switch (action.type) {
      case "email":
      case "name":
      case "slug":
      case "password":
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

    const response = await registerUser(email, password, name, slug);
    dispatch({ type: "response", response });
    dispatch({ type: "loading", loading: false });
    console.log(state);
    if (response?.success) {
      setTimeout(() => {
        router.push("/login");
      }, 3000);
    }
  };

  return (
    <div className="flex justify-center items-center h-[610px]">
      {response && (
        <div
          className={`${
            response.success
              ? "bg-green-200 border-2 border-green-800 text-green-800"
              : "bg-red-200 border-2 border-red-800 text-red-800"
          } py-2 px-5 my-10 text-center`}
        >
          <span className="font-bold">
            {response.success
              ? `Success ${response.message}`
              : `Failure: ${
                  response.error
                    ? response.error.message
                    : "An unknown error occurred"
                }`}
          </span>
        </div>
      )}
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
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Slug
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-400 rounded"
            type="slug"
            id="slug"
            value={slug}
            onChange={(e) => {
              dispatch({ type: "slug", value: e.target.value });
            }}
          />
        </div>
        <button
          className="w-full bg-[#648FC6] hover:bg-[#6D9AD5] text-white font-bold py-2 px-4 rounded mt-5"
          type="submit"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Register;
