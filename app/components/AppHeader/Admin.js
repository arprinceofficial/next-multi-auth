"use client";
import { useAuth } from '@/app/context/AuthContext';

export default function Admin() {
    const { adminLogout } = useAuth();
    return (
        <>
            <div className='flex flex-col'>
                <button onClick={adminLogout}>Logout</button>
                <h1>Welcome Admin!</h1>
            </div>
        </>
    )
}
