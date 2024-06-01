import React, { useContext, useEffect } from 'react';

import './Header.css'
import { AuthContext, UserContext } from '../../App'
import { Link, useNavigate } from 'react-router-dom';
import Nopfp from '../NoPfp/Nopfp';

function Header() {
    //Global Context State
    const Auth = useContext(AuthContext);
    const UserData = useContext(UserContext);

    const navigate = useNavigate();
    
    return (
        <header className='header f-row w-100'>
            <div className='f-row logo-div f-align-center ml-40 g-10'>
                <span className='ski pointer' onClick={() => navigate('/ManageTournaments')}></span>
                <h4 className='pointer' onClick={() => navigate('/ManageTournaments')}>Manage Tournaments</h4>
            </div>
            <div className='f-row f-align-center g-20'>
                <ul className='f-row h-list'>
                    <Link to={'/ManageTournaments/Home'}>Home</Link>
                    <Link to={'/ManageTournaments/Features'}>Features</Link>
                    <Link to={'/ManageTournaments/Community'}>Community</Link>
                    <Link to={'/ManageTournaments/Blog'}>Blog</Link>
                </ul>
                <Link className='btn btn-primary pointer b-getstar' to={'/ManageTournaments/Create'}>{Auth.Auth ? 'Create' : 'Get Started'}</Link>
                <label className='f-row user-sign g-15 f-align-center mr-40'>
                    <Link to={Auth.Auth ? `/ManageTournaments/Profile/${UserData.UserData[0]}` : '/ManageTournaments/Login'}><Nopfp Auth={Auth} /></Link>
                    <Link className='pointer' to={Auth.Auth ? `/ManageTournaments/Profile/${UserData.UserData[0]}` : '/ManageTournaments/Login'}>{Auth.Auth ? UserData.UserData[0] || 'Username' : 'Sign in'}</Link>
                </label>
            </div>
        </header>
    )
}

export default Header