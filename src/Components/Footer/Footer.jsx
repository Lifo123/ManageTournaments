import { Link } from 'react-router-dom'
import Input from '../Input/Input'
import './Styles/Footer.css'

function Footer() {
    return (
        <footer className="footer f-row f-align-center f-justify-center g-120 mt-50">
            <div className='f-col'>
                <label className='f-row g-10'>
                    <Link  className='ski'></Link>
                    <h5 className='f-fnt-1' style={{fontSize: '30px'}}>HLZ</h5>
                </label>
                <p className='mt-25 f-fnt-2'>Copyright © {new Date().getFullYear()} Landify UI Kit.</p>
                <p className='mt-5 f-fnt-2'>All rights reserved</p>
                <ul className='mt-25 f-row g-10'>
                    <Link  className='ski'>ig</Link>
                    <Link  className='ski'>ds</Link>
                    <Link  className='ski'>twt</Link>
                    <Link  className='ski'>yt</Link>
                </ul>
            </div>
            <div className='f-row g-50'>
                <ul className='f-col g-10'>
                    <h5 className='f-fnt-1'>Company</h5>
                    <Link  className='f-fnt-2 mt-5'>About Us</Link>
                    <Link  className='f-fnt-2'>Blog</Link>
                    <Link  className='f-fnt-2'>Contac us</Link>
                    <Link  className='f-fnt-2'>Pricing</Link>
                    <Link  className='f-fnt-2'>Testimonios</Link>
                </ul>
                <ul className='f-col g-10'>
                    <h5 className='f-fnt-1'>Suport</h5>
                    <Link  className='f-fnt-2 mt-5'>Help Center</Link>
                    <Link  className='f-fnt-2'>Terms of Service</Link>
                    <Link className='f-fnt-2'>Legal</Link>
                    <Link  className='f-fnt-2'>Privacy Legacy</Link>
                    <Link  className='f-fnt-2'>Status</Link>
                </ul>
            </div>
            <div className='f-col g-20' style={{width: '280px'}}>
                <h5 className='f-fnt-1'>Stay up to Date</h5>
                <Input t={'email'} text={'Your email address'} n={'email'}/>
            </div>
        </footer>
    )
}

export default Footer