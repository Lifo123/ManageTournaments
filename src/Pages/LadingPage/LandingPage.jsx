import './Styles/LadingPage.css'
import { useContext } from 'react';
import { Context } from '../../App';

import Header from '../../Components/Header/Header';

function LandingPage() {
  const [Auth, setAuth] = useContext(Context)
  return (
    <>
      <Header />
      <main className='lan-main d-flex absolute f-justify-center g-120 w-75'>
          <div className='f-col g-30 lan-left'>
            <h1 className=''>Manage your Tournaments <span>Free</span></h1>
            <p >Choosing colors or typography for your website? Use the Toolbar below to realize your choices. and manage complete free all tournaments with Admin mode.</p>
            <div className='f-row g-20'>
              <span className='btn-primary'>Get Started</span>
              <span className='btn-secondary'>View Tournaments</span>
            </div>
          </div>
          <div className='d-flex f-center lan-right'>
            <img src="../../../public/ImgLanding.png" alt="#" />
          </div>
      </main>
    </>
  )
}

export default LandingPage