import { lazy, useContext } from 'react'
import { AuthContext, UserContext } from '../../../App'
import './Styles/Home.css'

const Header = lazy(() => import('../../../Components/Header/Header'))

export default function Home() {
    const Auth = useContext(AuthContext);
    const UserData = useContext(UserContext);

  return (
    <>
        <Header />
        <p>Hola</p>
    </>
  )
}