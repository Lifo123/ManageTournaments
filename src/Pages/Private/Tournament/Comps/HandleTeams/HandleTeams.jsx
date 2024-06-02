import './Styles/HandleTeams.css'
import { useContext, useState } from 'react'
import { TourInfoContext } from '../../Tournament';

export default function HandleTeams() {
    //States
    const [Groups, setGroups] = useState(1);

    //Functions
    const HandleAddGroup = () => {
        setGroups(Groups + 1);
    }

    return (
        <div className='t-t-div w-60 g-20'>
            {Array.from({ length: Groups }, (_, index) => (
                <Group key={index} tgr={index} />
            ))}
            {
                Groups <= 5 ? (
                    <ul className='group-team d-flex f-center br-8 pointer add-btn' onClick={HandleAddGroup}>
                        <AddIcon h={20} />
                    </ul>
                ) : null
            }
        </div>
    )
}

//Other Components
function Group({ tgr }) {
    //States
    const [Teams, setTeams] = useState([{ team: 'TBD', id: tgr }])

    //Functions
    const HandleAddTeam = () => {
        setTeams([...Teams, { team: 'TBD', id: tgr }]);
    }
    return (
        <section className='f-col' tgr={`G${tgr + 1}`}>
            <h4>Group {tgr + 1}</h4>
            <ul className='group-team grp-cont f-col br-6 mt-1'>
                {
                    Teams && Teams.map((item, index) => (
                        <Team key={index} data={item} id={index + 1} />
                    ))
                }
                {Teams.length <= 15 ? (
                    <li className='t-list add-btn d-flex f-center br-none w-100 pointer' onClick={HandleAddTeam}><AddIcon h={90} /></li>
                ) : null
                }
            </ul>
        </section>
    )
}

function Team({ data, id }) {
    //Local Context
    const TourContext = useContext(TourInfoContext)

    return (
        <li className='t-list plaf f-row f-align-center' edit={'ttn'}>
            <input className='w-90 d-flex f-align-center h-100' defaultValue={data.team} disabled={TourContext.Save ? false : true} placeholder='TBD' />
            <input className='t-id w-10 text-center h-100' defaultValue={id} maxLength={6} disabled={TourContext.Save ? false : true} placeholder='Grp' />
        </li>
    )
}

function AddIcon({ h }) {
    return (
        <span className='br-none d-flex f-center no-select'>
            <svg viewBox="0 0 24 24" fill="none" style={{ height: `${h || 20}%`, width: `${h || 20}%` }}>
                <path d="M5 12H19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 5L12 19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </span>
    )
}
