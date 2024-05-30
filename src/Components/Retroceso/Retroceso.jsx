import { useNavigate } from 'react-router-dom'
import './Retroceso.css'

export default function Retroceso({ text }) {
    const navigate = useNavigate();

    return (
        <label className='retro f-row g-5 pointer mt-40 f-align-center ms-5 br-6' onClick={() => navigate(-1)}>
            <span className='no-select d-flex f-center'>
                <svg viewBox="0 0 24 24" fill="none">
                    <path d="M4 4V20M8 12H20M8 12L12 8M8 12L12 16"  strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </span>
            {text ? <p className='no-select hm-font-p'>{text}</p> : null}
        </label>
    )
}
