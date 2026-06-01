"use client"
import React, { createContext, useEffect, useState } from 'react';
export const context = createContext()
const ContextProvider = ({ children }) => {
    const [call, setCall] = useState([])
    const [text, setText] = useState([])
    const [video, setVideo] = useState([])
    const [users, setUsers] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/data.json')
            const data = await res.json()
            setUsers(data)
        }
        fetchData()
    }, [])
    return (
        <div>
            <context.Provider value={{ users, call, setCall, text, setText, video, setVideo }}>{children}</context.Provider>
        </div>
    );
};

export default ContextProvider;