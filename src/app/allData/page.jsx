"use client"
import { context } from "@/app/Provider/ContextProvider";
import { useContext } from "react";
import AllData from "./AllData"; // component আলাদা ফাইলে নিন

const AllDataPage = () => {
    const { users } = useContext(context)
    if (!users || users.length === 0) return <p>Loading...</p>
    
    return (
        <div className="grid grid-cols-3 gap-4 p-10">
            {users.map(data => (
                <AllData key={data.id} data={data} />
            ))}
        </div>
    )
}

export default AllDataPage;