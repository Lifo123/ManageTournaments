import './Styles/LadingPage.css'
import React from 'react';

import { Link } from 'react-router-dom';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

function LandingPage() {

  return (
    <>
      <Header />
      <main className='lan-main d-flex sticky f-justify-center g-120 w-75'>
        <div className='f-col g-20 lan-left'>
          <h1 className=''>Manage your Tournaments <span>Free</span></h1>
          <p className='a-fnt-2'>Choosing colors or typography for your website? Use the Toolbar below to realize your choices. and manage complete free all tournaments with Admin mode.</p>
          <div className='f-row g-30 mt-1 f-row'>
            <Link className='btn btn-primary' to={'/Create'}>Get Started</Link>
            <Link className='btn btn-secondary' to={'/Home'}>View Tournaments</Link>
          </div>
        </div>
        <div className='d-flex f-center lan-right'>
          <img src="./ImgLanding.png" alt="Landing img" />
        </div>
      </main>
      <div className='f-col lan-sec m-auto w-100'>
        <h2 className='lan-sec-title a-fnt-1 m-auto'>Manage your entire Tournament in a single system</h2>
        <p className='m-auto a-fnt-2 mt-1 f-row'>Tournaments for specifics games</p>
        <div className='f-row f-justify-around lan-cardzone w-80 m-auto mt-60'>
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
        <div className='f-col w-60 f-justify-center'>
          <h3 className='text-left a-fnt-1' style={{ fontSize: '35px' }}>Helping to people create memorable tournaments</h3>
          <p className='a-fnt-2'>We reached here with our hard work and dedication</p>
        </div>
        <div className='f-col w-40 g-30'>
          <ul className='f-row g-20'>
            <li className='l-t-info g-15 f-row f-align-center'>
              <span className='br-50 hover-scale1 pointer'></span>
              <div className='f-col f-justify-center'>
                <h4>2,245,341</h4>
                <p className='a-fnt-2'>Members</p>
              </div>
            </li>
            <li className='l-t-info g-15 f-row f-align-center'>
              <span className='br-50 hover-scale1 pointer'></span>
              <div className="f-col f-justify-center">
                <h4>46,328</h4>
                <p className='a-fnt-2'>Clubs</p>
              </div>
            </li>
          </ul>
          <ul className='f-row g-20'>
            <li className='l-t-info g-15 f-row f-align-center'>
              <span className='br-50 hover-scale1 pointer'></span>
              <div className="f-col f-justify-center">
                <h4>828,867</h4>
                <p className='a-fnt-2'>Servers</p>
              </div>
            </li>
            <li className='l-t-info g-15 f-row f-align-center'>
              <span className='br-50 hover-scale1 pointer'></span>
              <div className="f-col f-justify-center">
                <h4>1,926,436</h4>
                <p className='a-fnt-2'>Tournaments</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <h2 className='a-fnt-1 m-auto w-45 text-center mt-160' style={{ fontSize: '54px' }}>Pellentesque suscipit fringilla libero eu.</h2>
      <Link className='btn btn-primary mx-auto mt-40 mb-60' style={{ fontSize: '14px' }}>Get a Demo</Link>
      <Footer />
    </>
  )
}

export default LandingPage