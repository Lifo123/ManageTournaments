import React, { useEffect } from 'react'

function Match({ pState, team }) {
    let teams = team.split('.');

    return (
        <div className={`gr-match absolute ${pState === 'top' ? 'gr-top' : 'gr-bot'}`}>
            <div className=''>
                <p className='pointer text-center' edit={'Tm'}>{teams[0] || 'Team Name'}</p>
                <span className='d-flex f-center'>0</span>
            </div>
            <div className='gr-mt-t'>
                <p className='pointer text-center' edit={'Tm'}>{teams[1] || 'Team Name'}</p>
                <span className='d-flex f-center'>0</span>
            </div>
            <span className='gr-detail d-flex absolute'></span>
        </div>
    )
}

export default Match