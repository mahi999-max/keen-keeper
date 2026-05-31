"use client"
import React, { useContext } from 'react';
import { context } from '../Provider/ContextProvider';
import { IoCall } from 'react-icons/io5';
import { FaVideo } from 'react-icons/fa';
import { LuMessageCircleMore } from 'react-icons/lu';
import Image from 'next/image';
import call from '../../../public/call.png'
export const Timeline = () => {
    const { call, setCall, users, text, setText, video, setVideo } = useContext(context)
    const allActivities = [...call, ...video, ...text]
    const icon = (type) => {
        if (type==='Call') return <Image src="/call.png" width={30} height={30} alt='Call'></Image>
        if (type==='Video') return <Image src="/video.png" width={30} height={30} alt='Call'></Image>
        if (type==='Text') return <Image src="/text.png" width={30} height={30} alt='Call'></Image>
    }
    return (
        <div className='md:px-[245px] md:py-20 py-5 bg-[#e8e8e9e2]'>
            <div className='text-4xl font-bold mb-3'>Timeline</div>
            <div className='space-y-3'>{
                allActivities.map((media, i) =>(<div key={i} className='border bg-white border-none p-6 flex gap-5 items-center rounded-2xl'>
                    <div >{icon(media.type)}</div>
                    <div><div><span className='font-bold text-xl'>{media.type}</span> with {media.title}</div>
                    <div>{media.time}</div>
                    </div>
                    </div>
                ))
            }</div>
        </div>
    );
};

export default Timeline;