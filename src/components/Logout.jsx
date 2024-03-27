import React from 'react'

const Logout = () => {
  return (
    <div className='flex justify-center'>
    <div className='flex flex-col items-center justify-center border-2 border-black w-[40vw] rounded-lg '>
        <h1>Welcome <span className='text-red-500'>Kaushal Patel!</span></h1>
        <button>Logout</button>
    </div>
    </div>
  )
}

export default Logout;