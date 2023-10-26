import React from 'react'

const Privacy = () => {
  return (
    <div className='flex flex-col items-center w-[50%] ml-auto mr-auto pt-20 pb-20'>
        <p className='font-medium text-[18px] pb-5'>We take privacy seriously</p>
        <p className='font-bold text-3xl pb-5'>Before you get started</p>
        <p className='font-medium text-gray-700 w-[80%] text-[20px] text-center pb-8'>We wont share your answers with anyone (and wont ever tell you which friends said what about you)</p>
        <p className='pb-8'>with love,</p>
        <button type="button" className="text-white bg-black focus:outline-none focus:ring-4 font-bold rounded-full text-sm px-5 py-4 text-center mr-2 mb-3">Start a test</button>
        <p className='text-[14px] text-gray-500'>Take only 5 minutes</p>
    </div>
  )
}

export default Privacy