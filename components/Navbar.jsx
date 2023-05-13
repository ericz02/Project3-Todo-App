const Navbar = () => {

    return (
        <div className="flex justify-between items-center p-[2rem] bg-[#5B8AC7]">
            <div className="">
                <h1 className="text-[25px] text-neutral-300 hover:cursor-pointer">
                    Awesome <strong>Todo</strong>
                </h1>
            </div>

            <div className="flex gap-8">
                <li className="text-neutral-100 hover:text-blue-300 hover:cursor-pointer">Login</li>
                <li className="text-neutral-100 hover:text-blue-300 hover:cursor-pointer">Register</li>
            </div>
            
        </div>  
    )
}

export default Navbar
