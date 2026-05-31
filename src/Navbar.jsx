// import React from 'react';
'use client'
import { PathnameContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiClock2 } from "react-icons/ci";
import { GoGraph } from "react-icons/go";
import { IoHomeOutline } from "react-icons/io5";

export const Navbar = () => {
    const pathname = usePathname();
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <a className="btn btn-ghost md:text-xl">Keen<span className="text-[#244D3F]">Keeper</span></a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal">
                        <li className={pathname==='/home' ? "border-b-2 border-b-red-600" : ""}><Link href='/home'><IoHomeOutline />Home
                        </Link></li>
                        <li className={pathname==='/timeline' ? "border-b-2 border-b-red-600" : ""}><Link href='/timeline'>
                        <CiClock2 />Timeline
                        </Link></li>
                        <li className={pathname==='/stats' ? "border-b-2 border-b-red-600" : ""}><Link href='/stats'>
                        <GoGraph />
                                Stats
                        </Link></li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;