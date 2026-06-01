const Loading = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen gap-4'>
            <div className='w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin'></div>
            <p className='text-xl font-bold text-gray-500'>Loading...</p>
        </div>
    )
}

export default Loading