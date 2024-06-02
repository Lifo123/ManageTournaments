import { useEffect } from 'react'
import './Styles/Alert.css'

export default function Alert({ data, funct }) {

    useEffect(() => {
        if (data.time !== 'infinite') {
            setTimeout(() => {
                funct(null);
            }, data.time);
        }
    }, [])

    return (
        <span className='f-row f-justify-between f-align-center alert fixed br-6' >
            <label className='f-col g-10'>
                <span className='ski d-flex f-center'>
                    {
                        data.type === 'error' ? (
                            <svg viewBox="0 0 24 24" fill="none">
                                <path d="M12 7V13M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx="12" cy="16.5" r="1" fill="#000000" />
                            </svg>
                        ) : data.type === 'warning' ? (
                            <svg viewBox="0 0 24 24" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.0618 4.4295C12.6211 3.54786 11.3635 3.54786 10.9228 4.4295L3.88996 18.5006C3.49244 19.2959 4.07057 20.2317 4.95945 20.2317H19.0252C19.914 20.2317 20.4922 19.2959 20.0947 18.5006L13.0618 4.4295ZM9.34184 3.6387C10.4339 1.45376 13.5507 1.45377 14.6428 3.63871L21.6756 17.7098C22.6608 19.6809 21.228 22 19.0252 22H4.95945C2.75657 22 1.32382 19.6809 2.30898 17.7098L9.34184 3.6387Z" />
                                <path d="M12 8V13"  stroke=' #FF9900' strokeWidth="1.7" strokeLinecap="round" />
                                <path d="M12 16L12 16.5"   stroke=' #FF9900' strokeWidth="1.7" strokeLinecap="round" />
                            </svg>
                        ) : null
                    }
                </span>
                <p>{data.message || 'Message'}</p>
            </label>
            <span className='ski pointer d-flex f-center' onClick={() => funct(null)}>
                <svg className='no-select' viewBox="0 0 24 24" fill="none">
                    <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="var(--br-normal)" />
                </svg>
            </span>
        </span>
    )
}