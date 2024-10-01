"use client";
import withAuth from '@/app/hoc/withAuth';

const UserPage = () => {
    return <div>Welcome User!</div>;
};

export default withAuth(UserPage, ['user', 'admin']); // Allow both user and admin roles