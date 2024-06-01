import { useState } from 'react'
import './Styles/HandleTeams.css'

export default function HandleTeams() {
    //States
    const [Groups, setGroups] = useState(1);

    //Functions
    const HandleAddGroup = () => {
        setGroups(Groups + 1);
    }

    return (
        <div>
            <h5>Teams</h5>
            <div className='t-t-div f-row g-20 f-wrap'>
                {Array.from({ length: Groups }, (_, index) => (
                    <Group key={index} />
                ))}
                {
                    Groups <= 5 ? (
                        <ul className='group-team d-flex f-center br-8 pointer add-btn' onClick={HandleAddGroup}>
                            <AddIcon h={20} />
                        </ul>
                    ) : null
                }
            </div>
        </div>
    )
}

//Other Components
function Group() {
    //States
    const [Teams, setTeams] = useState([{ team: 'TBD', id: '1' }])

    //Functions
    const HandleAddTeam = () => {
        setTeams([...Teams, { team: 'TBD', id: '0' }]);
    }
    return (
        <ul className='group-team f-col br-6'>
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
    )
}

function Team({ data, id }) {
    return (
        <li className='t-list f-row f-align-center'>
            <p className='w-90'>{data.team}</p>
            <span className='w-10 d-flex f-center h-100'>{id}</span>
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
