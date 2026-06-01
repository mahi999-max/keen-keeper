'use client'
import React, { useContext } from 'react';
import { Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Pie, PieChart } from 'recharts';
import { context } from '../Provider/ContextProvider';
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className='bg-white shadow p-3 rounded-xl'>
                <p className='font-bold'>{payload[0].name}</p>
                <p>Total: {payload[0].value}</p>
            </div>
        )
    }
}
const CustomLegend = ({ payload }) => {
    return (
        <div className='flex gap-6 justify-center mt-4'>
            {payload.map((entry, i) => (
                <div key={i} className='flex items-center gap-2'>
                    <div style={{ backgroundColor: entry.color }} className='w-4 h-4 rounded-full'></div>
                    <span className='font-semibold'>{entry.value}</span>
                </div>
            ))}
        </div>
    )
}

const Stats = () => {
    const { call, setCall, users, text, setText, video, setVideo } = useContext(context)
    const data = [
    { name: 'Call', value: call.length, fill: '#0088FE' },
    { name: 'Video', value: video.length, fill: '#00C49F' },
    { name: 'Text', value: text.length, fill: '#FFBB28' }
];
    return (
        <div className='md:px-50 md:py-25 bg-[#e8e8e9e2]'>
            <div className='font-bold text-5xl'>Friendship Analytics</div>

            {call.length === 0 && text.length === 0 && video.length === 0 ? (
                <div className='flex flex-col items-center justify-center py-20 gap-4'>
                    <p className='text-2xl font-bold text-gray-400'>No Data Found</p>
                </div>
            ) :(<div className='w-full h-[500px]'>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
            <Pie
                data={data}
                innerRadius={120}
                outerRadius={150}
                paddingAngle={2}
                dataKey="value"
            />
            <Tooltip content={<CustomTooltip />} />
                <Legend content={<CustomLegend />} />
        </PieChart>
        </ResponsiveContainer>
        </div>)}
        </div>
    );
};

export default Stats;