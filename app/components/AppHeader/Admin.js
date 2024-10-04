"use client";
import { useAuth } from '@/app/context/AuthContext';

export default function Admin() {
    const { adminLogout, auth_user } = useAuth();
    // console.log('auth_user', auth_user);
    return (
        <>
            <div className='flex flex-col'>
                <button onClick={adminLogout}>Logout</button>
                <h1>Welcome {auth_user.user.first_name + auth_user.user.last_name}!</h1>
                <h1>Email: {auth_user.user.email}!</h1>
            </div>
        </>
    )
}
