// import React from 'react';
import { FaPlus, FaPlusCircle, FaPlusSquare } from 'react-icons/fa';
import data from '../../../public/data.json'
import AllData from '../allData/page';
const HomePage = () =>{
    return (
    <div className='pt-20 mx-auto container mb-20 grid items-center justify-center space-y-5'>
        <div className='text-4xl font-bold text-center'>Friends to keep close in your life</div>
    <div className='text-center'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
relationships that matter most</div>
<button className='btn btn-active w-50'><FaPlusCircle/>Add a friend</button>
<div className='text-3xl font-bold'>Your Friends</div>
<div className='flex justify-between m-5'>
    <div className='grid justify-center items-center shadow-xl p-3 w-full'>
        <div className='text-xl font-bold text-center'>{data.length}</div>
        <div>Total friends</div>
    </div>
    <div className='grid justify-center items-center shadow-xl p-3 w-full'>
        <div className='text-xl font-bold text-center'>6</div>
        <div>On track</div>
    </div>
    <div className='grid justify-center items-center shadow-xl p-3 w-full'>
        <div className='text-xl font-bold text-center'>6</div>
        <div>Need Attention</div>
    </div>
    <div className='grid justify-center items-center shadow-xl p-3 w-full text-center'>
        <div className='text-xl font-bold text-center'>10</div>
        <div>Interaction this month</div>
    </div>
</div>
<div className='grid grid-cols-4 gap-3'>
    {
        data.map(data=>(<AllData data={data} key={data.id}></AllData>))
    }
</div>
        </div>
    );
};

export default HomePage;