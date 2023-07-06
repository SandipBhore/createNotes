import React from 'react'
import './navbar.scss'
import { Link } from "react-router-dom";

export default function Navbar() {

    return (
        <div>
            <div className='logo'>NotePad</div>
            <div className='logo logoMob'>NPad</div>
            <div className='navbar'>
                <div className='home'><Link to='/'>Notes</Link></div>
                <div className='create'><Link to='/create'>Create Note</Link></div>
            </div>
        </div>
        
    );
}