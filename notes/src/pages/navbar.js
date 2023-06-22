import React from 'react'
import './navbar.scss'
import { useNavigate } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate()

    return (
        <div className='navbar'>
            {/* <div className='home'><a onClick={()=>{navigate('/')}}>Notes</a></div> */}
            <div className='home'><Link to='/'>Notes</Link></div>
            <div className='create'><Link to='/create'>Create Note</Link></div>
        </div>
    );
}