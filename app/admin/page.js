"use client";
import withAuth from '@/app/hoc/withAuth';
import { useAuth } from '@/app/context/AuthContext';

const AdminPage = () => {
    const { adminLogout } = useAuth();
    return <>
        <div className='flex flex-col'>
            <button onClick={adminLogout}>Logout</button>
            <h1>Welcome Admin!</h1>
        </div>
    </>;
};

export default withAuth(AdminPage, ['Admin']);