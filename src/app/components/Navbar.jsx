import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const currentpath = usePathname()
    return (
        <div>
            <div className="flex space-x-6">
                <div><Link href={'/'} className={currentpath === '/'?"text-red-500":"text-white"}>Home</Link></div>
                <div><Link href={'/dashBoad'} className={currentpath === '/dashBoad'?"text-red-500":"text-white"}>Dashboard</Link></div>
            </div>
        </div>
    );
};

export default Navbar;