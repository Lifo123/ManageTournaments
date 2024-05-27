import { useContext, useEffect } from 'react'
import './Header.css'
import { Context } from '../../App'
import { Link, useNavigate } from 'react-router-dom';
import Nopfp from '../NoPfp/Nopfp';

function Header() {
    const [Auth, setAuth] = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem('Auth', Auth);
    }, [Auth]);

    const HandleChangeAuth = () => {
        setAuth(prevAuth => !prevAuth);
    };

    return (
        <header className='header f-row w-100'>
            <div className='f-row logo-div f-align-center ml-40 g-10'>
                <span className='pointer' onClick={() => navigate('/')}>img</span>
                <h4 className='pointer' onClick={() => navigate('/')}>Manage Tournaments</h4>
            </div>
            <div className='f-row f-align-center g-20'>
                <ul className='f-row h-list'>
                    <Link to={'/Home'}>Home</Link>
                    <Link to={'/Features'}>Features</Link>
                    <Link to={'/Community'}>Community</Link>
                    <Link to={'/Blog'}>Blog</Link>
                </ul>
                {Auth ? null : <span className='btn-primary pointer b-getstar'>Get Started</span>}
                <label className='f-row user-sign g-15 f-align-center mr-40'>
                    <Nopfp Auth={Auth} />
                    <p className='pointer' onClick={HandleChangeAuth}>{Auth ? 'Username' : 'Sign in'}</p>
                </label>
            </div>
        </header>
    )
}

export default Header