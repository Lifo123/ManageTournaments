import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Context } from '../App.jsx';

function Home() {
    const navigate = useNavigate();
    const [Auth, setAuth] = useContext(Context);

    //Functions
    const HandleLogout = () => {
        localStorage.setItem('isAuth', false);
        navigate('/');
    }

    return (
        <>
            <div>Login</div>

            <span onClick={HandleLogout}>Log out {Auth ? 'Existe' : 'Error'}</span>
        </>
    )
}

export default Home