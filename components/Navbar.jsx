"use client"
import { useRouter } from "next/navigation";
import useUser from '../hooks/useUser';

const Navbar  = () => {
    const { user, loading } = useUser();
    const router = useRouter();
    
    if (loading) return <p>Loading...</p>;

    return (
        <div className="flex justify-between mt-5">
            {
                user ? (
                    <>
                        <a onClick={() => router.replace('/profile')}>Profile</a>
                        <a onClick={() => router.replace('/logout')}>Logout</a>
                    </>
                ) : ( 
                    // User is not logged in
                    <>
                        <a onClick={() => router.replace('/login')}>Login</a>
                        <a onClick={() => router.replace('/register')}>Register</a>
                    </>
                )
            }
        </div>
    )
}

export default Navbar