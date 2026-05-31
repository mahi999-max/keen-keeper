// import React from 'react';

import { FaFacebook, FaInstagram, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export const Footer = () => {
    return (
        <div className="bg-[#244D3F] pt-20 pb-[124px] flex flex-col items-center text-white space-y-7 py-1">
            <h1 className=" font-bold text-4xl md:text-7xl">KeenKeeper</h1>
            <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            <p>Social Links</p>
            <div className="text-black flex gap-3">
                <div className=" border p-1 rounded-full  bg-white"><FaInstagramSquare /></div>
                <div className=" border p-1 rounded-full  bg-white"><FaFacebook />
</div>
                <div className=" border p-1 rounded-full  bg-white"><FaSquareXTwitter />
</div>
            </div>
        </div>
    );
};

export default Footer;