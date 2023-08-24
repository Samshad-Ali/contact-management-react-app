import React from 'react'
import { Link } from 'react-router-dom'
import {FcManager} from 'react-icons/fc'
const Navbar = () => {
  return (
    <nav className='h-20 w-full bg-black sticky top-0 z-50 text-white flex justify-between items-center md:px-10 px-2'>
     <h2 className='md:text-6xl font-bold text-4xl'>
     <Link to={'/'}> <FcManager/></Link>
     </h2>
     <ul className='flex md:gap-10 gap-2  justify-center items-center'>
      <li className='bg-slate-50 hover:bg-slate-300 text-black font-medium py-1 md:px-4 px-2 md:text-base text-xs rounded-sm'> <Link to={'/contact'}>Contact</Link> </li>
      <li className='bg-slate-50 hover:bg-slate-300 text-black font-medium py-1 md:px-4 px-2 md:text-base text-xs rounded-sm'> <Link to={'chart&map'}>Charts and Maps</Link> </li>
     </ul>
    </nav>
  )
}

export default Navbar;