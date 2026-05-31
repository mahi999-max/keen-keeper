"use client"
import { context } from "@/app/Provider/ContextProvider";
import Image from "next/image";
import { use, useContext } from "react";
import { FaVideo } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { LuMessageCircleMore } from "react-icons/lu";

// import data from '../../../public/data.json'
const DataDetails = ({ params }) => {
    const {call, setCall, users,text,setText,video,setVideo}=useContext(context)
    const { id } = use(params)
    const singledata = users.find(data => data.id == id)
     if (!singledata) return <p>Data not found.....</p>
    const { picture, name, status, tags, bio, days_since_contact, email, next_due_date, goal } = singledata
    const handleCall=()=>{
        const newCall=([...call,{ type: 'Call', title: name, time: new Date().toLocaleTimeString()}])
        setCall(newCall)
        console.log(newCall);
    }
    const handletext=()=>{
        const newText=([...text,{ type: 'Text', title: name, time: new Date().toLocaleTimeString()}])
        setText(newText)
        console.log(newText);
    }
    const handleVideo=()=>{
        const newVideo=([...video,{ type: 'Video', title: name, time: new Date().toLocaleTimeString()}])
        setVideo(newVideo)
        console.log(newVideo);
    }
    return (
        <div className="px-[245px] py-20">
            <div className=" flex gap-5 mb-3">
                <div className="w-full p-3 shadow grid justify-between items-center">
                    <Image src={picture} width={100} height={100} alt={name} className='rounded-full text-center'></Image>
                    <div className="font-bold text-2xl">{name}</div>
                    <div>{status}</div>
                    <div className="flex gap-2 text-center w-50">{tags.map((tag, ind) => <div key={ind} className='border-none rounded-3xl w-full bg-green-300 '>{tag}</div>)}</div>
                    <div className="italic">"{bio}"</div>
                </div>
                <div className="w-full"><div className="flex justify-between gap-4">
                    <div className="grid shadow justify-center w-full"><span className="text-xl font-bold">{days_since_contact}d ago</span>Days Since Contact</div>
                    <div className="grid shadow justify-center w-full"><span className="text-xl font-bold">{goal}</span>(Goal) days</div>
                    <div className="grid shadow justify-center w-full"><span className="text-xl font-bold">{next_due_date}</span>Next due</div></div>

                    <div className="w-full grid items-center py-6 shadow px-4">
                        <p className="font-bold flex justify-between">Relationship Goal <span><button className="btn">Edit</button></span></p>
                        <p>Connect every<span className="font-bold">{goal} days</span></p>
                    </div></div>
            </div>
            <div className="flex gap-3 space-y-3">
                <div className="grid gap-3 justify-center w-100 text-center text-xl">
                    <div className="shadow w-100">Snooze 2 weeks</div>
                    <div className="shadow w-100">Archieve</div>
                    <div className="shadow w-100">Delete</div>
                </div>
                <div className="shadow w-full">
                    <p className="text-xl">Quick check in</p>
                    <div className="flex gap-3 font-bold py-3"><div className="p-4 shadow w-full" onClick={handleCall}><IoCall />Call</div>
                        <div className="p-4 shadow w-full" onClick={handletext}><LuMessageCircleMore/>Text</div>
                        <div className="p-4 shadow w-full" onClick={handleVideo}><FaVideo />Video</div></div>
                </div>
            </div>
        </div>
    );
};

export default DataDetails;