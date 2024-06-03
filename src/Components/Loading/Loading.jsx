import { useEffect, useState } from 'react'
import './Loading.css'

export default function Loading({ t }) {
    //States
    const [Data, setData] = useState({ s: 0.3, mt: 0, w: 4 })

    useEffect(() => {
        if (t === 1) {
            setData({ s: 0.7, mt: 70, w: 10 });
        } else if (t === 2) {
            setData({ s: 0.5, mt: 40, w: 10 });
        }
    }, [])

    return (
        <span className='load-circle d-flex f-center m-auto' style={{ transform: `scale(${Data.s})`, marginTop: `${Data.mt}px` }}>
            <svg className='d-flex relative' >
                <circle className='absolute' cx="70" cy="70" r="70" strokeWidth={Data.w}></circle>
            </svg>
        </span>
    )
}
