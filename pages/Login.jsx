"use client"

import Link from "next/link"

const Login = () => {

    return (

        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            
            <div className="bg-white p-8 rounded shadow-md w-96">
            <h1 className="text-2xl font-bold mb-6">Login</h1>
            
            <form>
                
                <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                    Username:
                    </label>
                    <input
                    type="text"
                    id="username"
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                    placeholder="Enter your username"
                    required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password:
                    </label>
                    <input
                    type="password"
                    id="password"
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                    placeholder="Enter your password"
                    required
                    />
                </div>

                <button
                    type="submit"
                    className="bg-green-500 text-white font-medium py-2 px-4 rounded hover:bg-green-600"
                >
                    Login
                </button>

            </form>

      </div>
    </div>
        
        
    )
}

export default Login