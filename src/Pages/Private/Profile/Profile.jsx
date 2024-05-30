import './Styles/Profile.css'
import { lazy, useContext } from 'react'
import { AuthContext, UserContext } from '../../../App'

const Header = lazy(() => import('../../../Components/Header/Header'))


export default function Profile() {
    const { setAuth } = useContext(AuthContext);
    const { setUserData } = useContext(UserContext);

    //Functions
    const HandleLogOut = () => {
        setAuth(false);
        setUserData('');
        localStorage.clear('Auth')
        localStorage.clear('User');
    }

    return (
        <>
            <Header />
            <span className='d-flex btn f-btn-blue py-2 px-5 br-max m-auto mt-80 fnt-s15' onClick={HandleLogOut}>Log Out</span>
        </>
    )
}