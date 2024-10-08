// hoc/withAuth.js
'use client';
import { useAuth } from '@/app/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Loader from "@/app/components/Loader/SpinkitBounceLoader";

const withAuth = (WrappedComponent, allowedRoles) => {
    const AuthenticatedComponent = (props) => {
        const { role, loading } = useAuth() || {};
        const router = useRouter();
        useEffect(() => {
            if (!loading && (!role || (allowedRoles && !allowedRoles.includes(role.name)))) {
                // console.log('role name:', role);
                router.push('/');
            }
        }, [role, loading, router]);

        if (loading) {
            return <Loader />;
        }

        if (!role || (allowedRoles && !allowedRoles.includes(role.name))) {
            return null;
        }

        return <WrappedComponent {...props} />;
    };

    return AuthenticatedComponent;
};

export default withAuth;