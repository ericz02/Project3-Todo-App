import Image from "next/image"
import Link from "next/link"

const Login = () => {

    return (
        <div className="relative ">
            <Image className="w-[100%] h-[700px] object-cover" src="/images/login-new.jpeg" alt="My Image" width={1500} height={1000} />

        <div class="font-sans bg-cover">

            <div class="container mx-auto h-full flex flex-1 justify-center items-center">
                <div class="w-full max-w-lg">
                    <div class="leading-loose"> 

                        <form class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-sm p-[80px] bg-white bg-opacity-25 rounded shadow-xl m-[30px]">
                            <p class="text-white font-medium text-center text-lg font-bold">LOGIN</p>
                            <div class="">
                                <label class="block text-sm text-white" for="email">E-mail</label>
                                <input 
                                    class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white" 
                                    type="email" 
                                    id="email"  
                                    placeholder="Enter email" 
                                    required
                                />

                            </div>
                            <div class="mt-[10px]">
                                <label class="block  text-sm text-white">Password</label>
                                <input 
                                    class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                                    type="password" 
                                    id="password" 
                                    placeholder="Enter password" 
                                    arial-label="password" 
                                    required
                                />
                            </div>

                            <div class="mt-[30px] mb-[30px] flex justify-between">
                                <button 
                                    class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-blue-800 rounded"
                                    type="submit">Enter
                                </button>

                                <a 
                                    class="inline-block right-0 align-baseline font-bold text-sm text-500 text-white hover:text-blue-400"
                                    href="#">Forgot password?
                                </a>

                            </div>

                            <Link href={"/register"}>
                                <div class="text-center">
                                    <button 
                                        class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl 
                                        focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium
                                        rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                        Create an Account
                                    </button>
                                </div>
                            </Link>

                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Login;

