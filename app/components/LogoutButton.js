'use client';
import { useAuth } from '@/app/context/AuthContext';

const LogoutButton = () => {
    const { logout } = useAuth();

    return <button onClick={logout}>Logout</button>;
};

export default LogoutButton;