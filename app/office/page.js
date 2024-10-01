"use client";
// export const metadata = {
// 	title: "Office Page",
// 	description: "Office Page",
// };

import withAuth from '@/app/hoc/withAuth';
import LogoutButton from '@/app/components/LogoutButton';

const OfficePage = () => {
    return <>
        <div className='flex flex-col'>
            <LogoutButton />
            <h1>Welcome Office!</h1>
        </div>
    </>;
};

export default withAuth(OfficePage, ['Office']);