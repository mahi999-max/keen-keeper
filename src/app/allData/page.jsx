"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const AllData = ({ data }) => {
    const [call, setCall]=useState([])
    // if(AllData.length===0)return<>Loading....</>
    return (
        <Link href={`/allData/${data.id}`}>
        <div className='border border-none w-full mx-auto rounded-2xl py-3 shadow-xl space-y-4'>
            <div className='grid justify-center items-center'> <Image src={data.picture} width={60} height={60} alt={data.name} className='rounded-full text-center'></Image></div>
            <div className='grid justify-center'>
                <div className='font-bold text-xl'>{data.name}</div>
                <div>{data.days_since_contact}d ago</div>
                <div className='grid gap-2 text-center'>{data.tags.map((tag, ind) => <div key={ind} className='border-none rounded-3xl w-full bg-green-300'>{tag}</div>)}
                <div className= {`border-none rounded-3xl w-full text-white ${data.status==='on track' ? 'bg-green-700': 'bg-amber-300'} `}>{data.status}</div></div>
            </div>
        </div>
        </Link>
    );
};

export default AllData;