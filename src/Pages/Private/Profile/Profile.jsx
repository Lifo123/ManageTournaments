import { lazy } from 'react'
import './Styles/Profile.css'

const Header = lazy(() => import('../../../Components/Header/Header'))


export default function Profile() {

    //Functions
    const HandleLogOut = () => {
        localStorage.setItem('Auth', false);
        location.reload();
    }

    return (
        <>
            <Header />
            <span className='d-flex btn f-btn-blue py-2 px-5 br-max m-auto mt-120' onClick={HandleLogOut}>Log Out</span>
        </>
    )
}