import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Context } from '../App.jsx';
import Footer from '../Footer.jsx';

function Login() {
    const [Auth, setAuth] = useContext(Context)
    const navigate = useNavigate();

    //Functions
    const HandleLogin = () => {
        console.log('Wasa');
        localStorage.setItem('Auth', true)
        setAuth(true);
        navigate('/Admin')
    }

    const HandleLogOut = () => {
        console.log('Cerrando Sesion');
        localStorage.setItem('Auth', false)
        setAuth(false);
    }


    return (
        <>
            <div>Login</div>
            <p>{Auth ? 'Permisos validos' : 'Permisos Denegados'}</p>
            <span onClick={Auth ? HandleLogOut : HandleLogin}>{Auth ? 'Log out' : 'Log in'}</span>

            <Footer />

        </>
    )
}

export default Login