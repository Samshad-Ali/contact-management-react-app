import React from 'react'
import photo from '../assets/best-crm-software.png'
const Home = () => {
  return (
    <div className='h-[88vh] w-full flex flex-col gap-4 justify-center items-center bg-slate-500'>
        <h1 className='md:text-4xl text-2xl font-bold'>Contact Management App</h1>
        <img className='md:w-[500px] w-[310px] img' src={photo} alt="logo-photo" />
    </div>
  )
}

export default Home