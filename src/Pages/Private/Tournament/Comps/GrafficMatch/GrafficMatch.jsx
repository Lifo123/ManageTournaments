import React, { useState } from 'react'
import './Styles/GrafficMatch.css'
import Match from './Match'

function GrafficMatch({ scale, data }) {
  //States
  const [Group, setGroup] = useState('A');

  let m8 = data[Group][1].split('|');
  let m4 = data[Group][2].split('|');
  let m2 = data[Group][3].split('|');

  return (
    <div className='f-col g-20'>
      <div className='f-row g-20'>
        <span className="grfc-btn pointer" onClick={() => setGroup('A')}>Group A</span>
        <span className="grfc-btn pointer" onClick={() => setGroup('B')}>Group B</span>
        <span className="grfc-btn pointer" onClick={() => setGroup('C')}>Group C</span>
      </div>
      <div className='grfc-ctrl d-flex relative f-center m-auto' style={{ transform: `scale(${scale})` }}>
        <div className='grfc-center f-row f-align-center'>
          <aside className='gra-left relative'>
            <div className='gra-b gr-top gra-ALTop absolute'>
              <div className='gra-c gr-top absolute'>
                <Match pState={'top'} team={m8[0]} />
                <Match team={m8[1]} />
              </div>
              <div className='gra-c gr-bot absolute'>
                <Match pState={'top'} team={m8[2]} />
                <Match team={m8[3]} />
              </div>
              <div className='absolute' style={{ right: '0px', height: '101%', width: '43%', top: '-1px' }}>
                <Match pState={'top'} team={m4[0]} />
                <Match team={m4[1]} />
              </div>
            </div>
            <div className='gra-b gr-bot gra-ALBot absolute'>
              <div className='gra-c gr-top absolute'>
                <Match pState={'top'} team={m8[4]} />
                <Match team={m8[5]} />
              </div>
              <div className='gra-c gr-bot absolute'>
                <Match pState={'top'} team={m8[6]} />
                <Match team={m8[7]} />
              </div>
              <div className='absolute' style={{ right: '0px', height: '101%', width: '43%', top: '-1px' }}>
                <Match pState={'top'} team={m4[2]} />
                <Match team={m4[3]} />
              </div>
            </div>
            <div className='absolute' style={{ right: '0px', height: '100%', width: '27%' }}>
              <Match pState={'top'} team={m2[0]} />
              <Match team={m2[1]} />
            </div>
          </aside>
          <aside className='gra-right relative'>
            <Match team={data[Group][4]} />
          </aside>
        </div>
      </div>
    </div>
  )
}

export default GrafficMatch