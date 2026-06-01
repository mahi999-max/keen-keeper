"use client"
import React, { useContext } from 'react';
import { context } from '../Provider/ContextProvider';
import Image from 'next/image';
export const Timeline = () => {
    const { call, text, video } = useContext(context)
    const allActivities = [...call, ...video, ...text]
    const icon = (type) => {
        if (type === 'Call') return <Image src="/call.png" width={30} height={30} alt='Call'></Image>
        if (type === 'Video') return <Image src="/video.png" width={30} height={30} alt='Call'></Image>
        if (type === 'Text') return <Image src="/text.png" width={30} height={30} alt='Call'></Image>
    }
    return (
        <div className='md:px-[245px] md:py-20 py-5 bg-[#e8e8e9e2]'>
            <div className='text-4xl font-bold mb-3'>Timeline</div>

            {allActivities.length === 0 ? (
                <div className='flex flex-col items-center justify-center py-20 gap-4'>
                    <p className='text-2xl font-bold text-gray-400'>No Data Found</p>
                </div>
            ) : (
                <div className='space-y-3'>
                    {allActivities.map((media, i) => (
                        <div key={i} className='border bg-white border-none p-6 flex gap-5 items-center rounded-2xl'>
                            <div>{icon(media.type)}</div>
                            <div>
                                <div><span className='font-bold text-xl'>{media.type}</span> with {media.title}</div>
                                <div>{media.time}</div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
};

export default Timeline;