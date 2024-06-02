import { Link } from 'react-router-dom'
import './Styles/PrizePool.css'

export default function PrizePool() {
    return (
        <>
            <ul className='d-grid txt-stl-none place-center br-8 mt-15 ppol-div'>
                <h2 className='p-d-center'>Place</h2>
                <h2 className='p-d-center'>$ USD</h2>
                <h2 className='p-d-center'>Participants</h2>
                <ul className='d-grid w-100 relative'>
                    <h3 className='p-bg-1 p-d-center' >1st</h3>
                    <li className='p-bg-1 p-d-center' edit={"gdpp"}>$ 000</li>
                    <Link className='p-bg-1 p-d-center' edit={"gdpp"}>TBD</Link>
                    <h3 className='p-bg-2 p-d-center' >2nd</h3>
                    <li className='p-bg-2 p-d-center' edit={"gdpp"}>$ 000</li>
                    <Link className='p-bg-2 p-d-center' edit={"gdpp"}>TBD</Link>
                    <h3 className='p-bg-3 p-d-center' >3rd</h3>
                    <li className='p-bg-3 p-d-center' edit={"gdpp"}>$ 000</li>
                    <Link className='p-bg-3 p-d-center' edit={"gdpp"}>TBD</Link>
                </ul>
            </ul>
        </>
    )
}