// import React from 'react';

import Link from "next/link";
import { CiClock2 } from "react-icons/ci";
import { GoGraph } from "react-icons/go";
import { IoHomeOutline } from "react-icons/io5";

export const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Keen<span className="text-[#244D3F]">Keeper</span></a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href='/home'><IoHomeOutline />Home
                        </Link></li>
                        <li><Link href='/timeline'>
                        <CiClock2 />Timeline
                        </Link></li>
                        <li><Link href='/stats'>
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