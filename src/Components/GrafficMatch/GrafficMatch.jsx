import React from 'react'
import './Styles/GrafficMatch.css'
import Match from './Match'

function GrafficMatch() {
  return (
    <div className='flex-col g-20'>
      <div className='flex-row g-20'>
        <span className="grfc-btn pointer">Group A</span>
        <span className="grfc-btn pointer">Group B</span>
        <span className="grfc-btn pointer">Group C</span>
      </div>
      <div className='grfc-ctrl d-flex relative flex-center m-auto'>
        <div className='grfc-center flex-row f-align-center'>
          <aside className='gra-left relative'>
            <div className='gra-b gr-top gra-ALTop absolute'>
              <div className='gra-c gr-top absolute'>
                <Match pState={'top'} />
                <Match />
              </div>
              <div className='gra-c gr-bot absolute'>
                <Match pState={'top'} />
                <Match />
              </div>
              <div className='absolute' style={{ right: '0px', height: '101%', width: '43%', top: '-1px' }}>
                <Match pState={'top'} />
                <Match />
              </div>
            </div>
            <div className='gra-b gr-bot gra-ALBot absolute'>
              <div className='gra-c gr-top absolute'>
                <Match pState={'top'} />
                <Match />
              </div>
              <div className='gra-c gr-bot absolute'>
                <Match pState={'top'} />
                <Match />
              </div>
              <div className='absolute' style={{ right: '0px', height: '101%', width: '43%', top: '-1px' }}>
                <Match pState={'top'} />
                <Match />
              </div>
            </div>
            <div className='absolute' style={{ right: '0px', height: '100%', width: '27%'}}>
              <Match pState={'top'} />
              <Match />
            </div>
          </aside>
          <aside className='gra-right relative'>
            <Match />
          </aside>
        </div>
      </div>
    </div>
  )
}

export default GrafficMatch