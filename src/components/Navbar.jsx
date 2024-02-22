import React from 'react'
import { FcTodoList } from "react-icons/fc";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='flex justify-around bg-[#05445E] text-white gap-8 py-4'>
            <div className="logo flex items-center">            
                <span className='font-bold text-xl mx-9'>GoalGrid</span>
                <FcTodoList />
            </div>
            <ul className='flex gap-8 mx-9'>
                <NavLink className={(e)=>{return e.isActive?"bg-[#75E6DA] px-2 py-1 rounded-sm": ""}} to='/'><li className='cursor-pointer hover:font-bold transition-all'>Home</li></NavLink>
                <NavLink className={(e)=>{return e.isActive?"bg-[#75E6DA] px-2 py-1 rounded-sm": ""}} to='/about'><li className='cursor-pointer hover:font-bold transition-all'>About</li></NavLink>
            </ul>
        </nav>
    )
}

export default Navbar
