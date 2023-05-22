"use client"
import useUser from '../hooks/useUser'

const Footer = () => {
    const { user, loading } = useUser(); 

    if (loading) return <p>Loading...</p>;

    return (
      <div>
        {user ? 'User' : 'Login & Register'}
      </div>
    )
}

export default Footer;
