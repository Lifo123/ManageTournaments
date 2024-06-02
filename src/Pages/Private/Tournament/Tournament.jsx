import './Styles/Tournament.css'
import { createContext, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

//LocalContext
export const TourInfoContext = createContext();

//Import JSON
import DbTeams from './JSON/DataBase.Teams.json';

//Imports
import Header from '../../../Components/Header/Header';
import News from '../../../Components/News/News';
import Footer from '../../../Components/Footer/Footer';
import Retroceso from '../../../Components/Retroceso/Retroceso';
import GrafficMatch from './Comps/GrafficMatch/GrafficMatch'
import Loading from '../../../Components/Loading/Loading';
import HandleTeams from './Comps/HandleTeams/HandleTeams';
import InputSearch from '../../../Components/Input/InputSearch';


export default function Tournament() {
    //LocalContext
    const [TourInfo, setTourInfo] = useState({
        TourInfo: '',
        TourPool: '',
    });
    const [TourTeams, setTourTeams] = useState({});

    //States
    const [Save, setSave] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    //Functions
    const HandleContentEditable = (e) => {
        setSave((v) => !v);
        e.target.parentElement.querySelectorAll('[edit]').forEach(element => {
            element.contentEditable = !Save;
        });
    }


    const filterTeams = DbTeams.filter(item =>
        item.title && item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (
        <>

            <Header />
            <TourInfoContext.Provider value={{ TourTeams, setTourTeams, TourInfo, setTourInfo, Save }}>
                <div className='f-row w-100 f-justify-center'>
                    <Retroceso text={'Back'} />
                    {
                        TourInfo ? (
                            <main className='v-tournament w-80 f-col mt-40 g-20'>
                                <span className='t-save btn btn-primary pointer d-flex f-align-self-end' onClick={HandleContentEditable}>{Save ? 'Save' : 'Edit'}</span>
                                <div>
                                    <h5 edit={'Tf'}>{TourInfo.TourInfo.split('|')[0] || 'Tittle'}</h5>
                                    <p edit={'Tf'}>{TourInfo.TourInfo.split('|')[1] || 'Description'}</p>
                                </div>
                                <div>
                                    <h5>Prize Pool</h5>
                                    <p edit={'Tp'}>{TourInfo.TourPool.split('|')[0] || '1st'}</p>
                                    <p edit={'Tp'}>{TourInfo.TourPool.split('|')[1] || '2nd'}</p>
                                    <p edit={'Tp'}>{TourInfo.TourPool.split('|')[2] || '3rd'}</p>
                                </div>
                                <div className='f-col w-100'>
                                    <h5>Teams</h5>
                                    <p>Remember only put the ID Team</p>
                                    <div className='f-row g-70 mt-20'>
                                        <HandleTeams />
                                        <aside className='f-col w-30'>
                                            <InputSearch text={'Search Team'} funct={setSearchTerm}/>
                                            {
                                                searchTerm !== '' ? (
                                                    <ul className='tm-search f-col'>
                                                        {
                                                            filterTeams.slice(0, 10).map((team, index) => (
                                                                <CopyToClipboard key={index} text={team.id} options={{ format: 'text/plain' }} title='Copiar ID'>
                                                                    <li className='f-row g-20 f-justify-between pointer' key={index}>
                                                                        <p className='me-2'>{team.title}</p>
                                                                        <p className='d-flex text-end px-2 h-100'>{team.id}</p>
                                                                    </li>
                                                                </CopyToClipboard>
                                                            ))
                                                        }
                                                    </ul>
                                                ) : null
                                            }
                                        </aside>
                                    </div>
                                </div>
                            </main>
                        ) : <Loading t={2} />
                    }
                </div>
            </TourInfoContext.Provider>
            <Footer />
        </>
    )
}