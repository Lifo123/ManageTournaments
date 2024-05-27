import { useContext, useEffect } from 'react'
import './Header.css'
import { Context } from '../../App'
import { Link, useNavigate } from 'react-router-dom';

function Header() {
    const [Auth, setAuth] = useContext(Context);
    const history = useNavigate();


    //Functions
    const HandleChangeAuth = () => {
        localStorage.setItem('Auth', !Auth);
        setAuth((v) => !v);
    }

    useEffect(() => {
        setAuth(Auth === 'true');
    }, [])

    return (
        <header className='header f-row w-100'>
            <div className='f-row logo-div f-align-center ml-40 g-10'>
                <span className='pointer' onClick={() => history('/')}>img</span>
                <h4 className='pointer' onClick={() => history('/')}>Manage Tournaments</h4>
            </div>
            <div className='f-row f-align-center g-20'>
                <ul className='f-row h-list'>
                    <Link to={'/Home'}>Home</Link>
                    <Link to={'/Features'}>Features</Link>
                    <Link to={'/Community'}>Community</Link>
                    <Link to={'/Blog'}>Blog</Link>
                </ul>
                {Auth ? null : <span className='btn-primary pointer b-getstar'>Get Started</span>}
                <label className='f-row user-sign g-10 f-align-center mr-40'>
                    <span className='br-50 relative d-flex pointer'>
                        <span className='br-50'></span>
                        <span className='quad'></span>
                    </span>
                    <p className='pointer' onClick={HandleChangeAuth}>{Auth ? 'Username' : 'Sign in'}</p>
                </label>
            </div>
        </header>
    )
}

export default Header