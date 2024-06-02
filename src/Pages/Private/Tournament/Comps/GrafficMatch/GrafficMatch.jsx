import React, { useState } from 'react'
import './Styles/GrafficMatch.css'
import Match from './Match'

function GrafficMatch({ scale, data, left }) {
  //States
  const [GroupMatch, setGroupMatch] = useState('');
  console.log(data);

  return (
    <div className='f-col g-20'>
      <div className='f-row g-20'>
        {data.map((item, index) => (
          <span key={index} className="grfc-btn pointer">Group {index + 1}</span>
        ))}
      </div>
      <div className='grfc-ctrl d-flex relative f-center m-auto' style={{ transform: `scale(${scale || 1})`, left: `${left}px` }}>
        <div className='grfc-center f-row f-align-center'>
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
            <div className='absolute' style={{ right: '0px', height: '100%', width: '27%' }}>
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