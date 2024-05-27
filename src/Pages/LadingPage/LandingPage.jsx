import './Styles/LadingPage.css'
import { useContext } from 'react';
import { Context } from '../../App';

import Header from '../../Components/Header/Header';

function LandingPage() {
  const [Auth, setAuth] = useContext(Context)
  return (
    <>
      <Header />
      <main className='lan-main d-flex sticky f-justify-center g-120 w-80'>
        <div className='f-col g-20 lan-left'>
          <h1 className=''>Manage your Tournaments <span>Free</span></h1>
          <p className='a-fnt-2'>Choosing colors or typography for your website? Use the Toolbar below to realize your choices. and manage complete free all tournaments with Admin mode.</p>
          <div className='f-row g-30 mt-10'>
            <span className='btn-primary'>Get Started</span>
            <span className='btn-secondary'>View Tournaments</span>
          </div>
        </div>
        <div className='d-flex f-center lan-right'>
          <img src="../../../public/ImgLanding.png" alt="#" />
        </div>
      </main>
      <div className='f-col lan-sec m-auto w-100'>
        <h2 className='lan-sec-title a-fnt-1 m-auto'>Manage your entire Tournament in a single system</h2>
        <p className='m-auto a-fnt-2 mt-10'>Tournaments for specifics games</p>
        <div className='f-row f-justify-around lan-cardzone w-80 m-auto mt-40'>
          <div className='f-col l-c-card g-15'>
            <span className='br-50'></span>
            <h3 className='a-fnt-3'>Membership Organisations</h3>
            <p className='a-fnt-2'>Our membership management software provides full automation of membership renewals and payments</p>
          </div>
          <div className='f-col l-c-card g-15'>
            <span className='br-50'></span>
            <h3 className='a-fnt-3'>National Associations</h3>
            <p className='a-fnt-2'>Our membership management software provides full automation of membership renewals and payments</p>
          </div>
          <div className='f-col l-c-card g-15'>
            <span className='br-50'></span>
            <h3 className='a-fnt-3'>Clubs And Groups</h3>
            <p className='a-fnt-2'>Our membership management software provides full automation of membership renewals and payments</p>
          </div>
        </div>
      </div>

      <div className='lan-third f-row m-auto w-65'>
        <div className='f-col w-55'>
          <h3 className='text-left a-fnt-1' style={{ fontSize: '35px' }}>Helping to people create memorable tournaments</h3>
          <p className='a-fnt-2'>We reached here with our hard work and dedication</p>
        </div>
        <div className='f-col'>
          <ul className='f-row'>
            <li className='l-t-info'>
              <span></span>
              <h4>2,245,341</h4>
              <p>Members</p>
            </li>
            <li className='l-t-info'>
              <span></span>
              <h4>46,328</h4>
              <p>Clubs</p>
            </li>
          </ul>
          <ul className='f-row'>
            <li className='l-t-info'>
              <span></span>
              <h4>828,867</h4>
              <p>Servers</p>
            </li>
            <li className='l-t-info'>
              <span></span>
              <h4>1,926,436</h4>
              <p>Tournaments</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default LandingPage