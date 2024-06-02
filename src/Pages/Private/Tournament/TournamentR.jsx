import './Styles/Tournament.css'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useContext, useState } from 'react';
import { TourInfoContext } from './Tournament';
import { FunctContext } from '../../../App';



//Import JSON
import DbTeams from './JSON/DataBase.Teams.json';

//Imports
import Header from '../../../Components/Header/Header';
import Footer from '../../../Components/Footer/Footer';
import Retroceso from '../../../Components/Retroceso/Retroceso';
import GrafficMatch from './Comps/GrafficMatch/GrafficMatch'
import Loading from "../../../Components/Loading/Loading";
import HandleTeams from './Comps/HandleTeams/HandleTeams';
import InputSearch from '../../../Components/Input/InputSearch';
import PrizePool from './Comps/PrizePool/PrizePool';

export default function TournamentR() {
    //States
    const LifoFunct = useContext(FunctContext);
    const TContext = useContext(TourInfoContext);
    const [searchTerm, setSearchTerm] = useState('');

    //Functions
    const HandleContentEditable = (e) => {
        TContext.setSave((v) => !v);
        e.target.parentElement.querySelectorAll('[edit]').forEach(element => {
            element.contentEditable = !TContext.Save;
            LifoFunct.showAlert('Estas editando la informacion', 'error');
        });
    }

    const filterTeams = TContext.SearchSort(DbTeams, searchTerm);

    return (
        <>
            <Header />
            <div className='f-row w-100 f-justify-center'>
                <Retroceso text={'Back'} />
                {
                    TContext.TourInfo ? (
                        <main className='v-tournament w-80 f-col mt-40 g-20'>
                            <span className='t-save btn btn-primary pointer d-flex f-align-self-end' onClick={HandleContentEditable}>{TContext.Save ? 'Save' : 'Edit'}</span>
                            <section sgt={'info'}>
                                <h5 edit={'Tf'}>{TContext.TourInfo.TourInfo.split('|')[0] || 'Tittle'}</h5>
                                <p edit={'Tf'}>{TContext.TourInfo.TourInfo.split('|')[1] || 'Description'}</p>
                            </section>
                            <section className='f-col w-100' sgt={'pool'}>
                                <h5>Prize Pool</h5>
                                <p className='fnt-low fnt-s15 mt-2'>{'DATA'}</p>
                                <PrizePool />
                            </section>
                            <section className='f-col w-100'>
                                <h5>Teams</h5>
                                <p>Remember only put the ID Team</p>
                                <div className='f-row g-70 mt-20' sgt={'teams'}>
                                    <HandleTeams />
                                    <aside className='f-col w-30'>
                                        <InputSearch text={'Search Team'} funct={setSearchTerm} />
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
                            </section>
                        </main>
                    ) : <Loading t={2} />
                }
            </div>
            <Footer />
        </>
    )
}