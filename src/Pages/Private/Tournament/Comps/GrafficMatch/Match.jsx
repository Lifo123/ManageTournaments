import React from 'react'

export default function Match({ pState }) {
    return (
        <div className={`gr-match absolute ${pState === 'top' ? 'gr-top' : 'gr-bot'}`}>
            <div className=''>
                <p className='pointer text-center' edit={'Tmn'}>{'Team Name'}</p>
                <span className='d-flex f-center'>0</span>
            </div>
            <div className='gr-mt-t'>
                <p className='pointer text-center' edit={'Tmn'}>{'Team Name'}</p>
                <span className='d-flex f-center'>0</span>
            </div>
            <span className='gr-detail d-flex absolute'></span>
        </div>
    )
}