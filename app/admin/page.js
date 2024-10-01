"use client";
import withAuth from '@/app/hoc/withAuth';

const AdminPage = () => {
    return <div>Welcome Admin!</div>;
};

export default withAuth(AdminPage, ['Admin']);