import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const currentpath = usePathname()
    return (
        <div>
            <div className="flex space-x-6">
                <div><Link href={'/'} className={currentpath === '/'?"text-red-500":"text-white"}>Home</Link></div>
                <div><Link href={'/about'} className={currentpath === '/about'?"text-red-500":"text-white"}>About</Link></div>
                <div><Link href={'/Blog'} className={currentpath === '/Blog'?"text-red-500":"text-white"}>Blog</Link></div>
                <div><Link href={'/Contact'} className={currentpath === '/Contact'?"text-red-500":"text-white"}>Contact</Link></div> 
            </div>
        </div>
    );
};

export default Navbar;