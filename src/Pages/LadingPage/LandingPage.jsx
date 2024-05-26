import { useContext } from 'react';
import Header from '../../Components/Header/Header';
import { Context } from '../../App';

function LandingPage() {
  const [Auth, setAuth] = useContext(Context)
  return (
    <>
      <Header />
      {Auth ? 'Estamos redy' : 'Idk'}
    </>
  )
}

export default LandingPage