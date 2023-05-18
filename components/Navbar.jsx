import Link from "next/link"

const Navbar = () => {

    return (
        <div className="flex justify-between items-center p-[2rem] bg-[#5B8AC7]">
            <div className="">
                <h1 className="text-[25px] text-neutral-100 hover:cursor-pointer">

                   <strong>Awesome</strong>Todo
                </h1>
            </div>

            <div className="flex gap-8">
                <Link href={"/login"} >
                    <li className="text-neutral-100 hover:text-blue-300 hover:cursor-pointer">Login</li>
                </Link>

                <Link href={"/register"}>
                    <li className="text-neutral-100 hover:text-blue-300 hover:cursor-pointer">Register</li>
                </Link>
            </div>
            
        </div>  
    )
}

export default Navbar
