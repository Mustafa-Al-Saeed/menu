import React from 'react'
import { Link , NavLink } from 'react-router-dom'
import { Navbar } from 'flowbite-react';
import SearchArea from './SearchArea';

const Nav = ({search}) => {
    return (
        <Navbar className=' bg-[#202427] text-[#b79883]'>
            <Navbar.Brand as={Link} to="/">
                <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white">مطعم جديد</span>
            </Navbar.Brand>
            <Navbar.Toggle className=' transition' />
            <Navbar.Collapse className=' duration-1000 transition-all'>
                <SearchArea onSearch={search} styleButton="transition mr-4 bg-[#F8F8F8] font-bold text-[#b79883] p-2 rounded-md hover:bg-[#65433D] hover:text-[#F8F8F8]" styleInput="w-full bg-[#F8F8F8] text-[#b79883] placeholder:text-[#b79883] rounded-md"/>
            </Navbar.Collapse> 
        </Navbar>
    )
}

export default Nav