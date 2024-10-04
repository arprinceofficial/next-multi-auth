"use client";
import { useAuth } from '@/app/context/AuthContext';
import LogoutButton from '@/app/components/LogoutButton';

export default function Admin() {
    const { auth_user } = useAuth();
    // console.log('auth_user', auth_user) ;
    return (
        <>
            <div className='flex flex-col'>
                <LogoutButton />
                <h1>Welcome {auth_user.user.first_name + auth_user.user.last_name}!</h1>
                <h1>Email: {auth_user.user.email}!</h1>
            </div>
        </>
    )
}
