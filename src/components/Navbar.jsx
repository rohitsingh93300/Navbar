import { GraduationCap } from 'lucide-react'
import React, { useState } from 'react'
import { Menu, CircleX } from 'lucide-react';
import ResponsiveMenu from './ResponsiveMenu';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='bg-gray-800 p-4 '>
            <div className='flex justify-between items-center max-w-7xl mx-auto'>
                {/* logo */}
                <div>
                    <h1 className='flex gap-2 items-center text-4xl font-bold text-gray-300'><GraduationCap className='w-10 h-10' />Logo</h1>
                </div>
                {/* menu section */}
                <nav className='hidden md:block'>
                    <ul className='flex items-center gap-7 text-xl text-gray-300 font-semibold cursor-pointer'>
                        <li className='hover:text-white transition-all'>Home</li>
                        <li>About</li>
                        <li>Testimonials</li>
                        <li>Contact</li>
                        <button className='bg-blue-500 text-white px-3 py-1 rounded-md'>Login</button>
                    </ul>
                </nav>
                {
                    open ? <CircleX onClick={() => setOpen(false)} className='md:hidden text-gray-300 w-8 h-8' /> :
                        <Menu onClick={() => setOpen(true)} className='md:hidden text-gray-300 w-8 h-8' />
                }
            </div>
            <ResponsiveMenu open={open} setOpen={setOpen} />
        </div>
    )
}

export default Navbar
