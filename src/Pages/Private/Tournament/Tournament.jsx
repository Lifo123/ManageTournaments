import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import './Styles/Tournament.css'

import Header from '../../../Components/Header/Header';
import News from '../../../Components/News/News';
import Footer from '../../../Components/Footer/Footer';
import Retroceso from '../../../Components/Retroceso/Retroceso';
import GrafficMatch from './Comps/GrafficMatch/GrafficMatch'
import Loading from '../../../Components/Loading/Loading';
import HandleTeams from './Comps/HandleTeams/HandleTeams';


export default function Tournament() {
    //GlobalStates
    const User = useContext(UserContext);

    //States
    const [Save, setSave] = useState(false);
    const [TournamentData, setTourData] = useState({
        TourInfo: 'Mundial Champion Ship|description Test',
        TourPool: 'num 1st|num 2nd|num 3rd|num 4th'
    });



    //Functions
    const HandleContentEditable = (e) => {
        setSave((v) => !v);
        e.target.parentElement.querySelectorAll('[edit]').forEach(element => {
            element.contentEditable = !Save;
        });
    }

    return (
        <>
            <Header />
            <div className='f-row w-100 f-justify-center'>
                <Retroceso text={'Back'} />
                {
                    TournamentData ? (
                        <main className='v-tournament w-80 f-col mt-40 g-20'>
                            <span className='t-save btn btn-primary pointer d-flex f-align-self-end' onClick={HandleContentEditable}>{Save ? 'Save' : 'Edit'}</span>
                            <div>
                                <h5 edit={'Tf'}>{TournamentData.TourInfo.split('|')[0]}</h5>
                                <p edit={'Tf'}>{TournamentData.TourInfo.split('|')[1]}</p>
                            </div>
                            <div>
                                <h5>Prize Pool</h5>
                                <p edit={'Tp'}>{TournamentData.TourPool.split('|')[0]}</p>
                                <p edit={'Tp'}>{TournamentData.TourPool.split('|')[1]}</p>
                                <p edit={'Tp'}>{TournamentData.TourPool.split('|')[2]}</p>
                            </div>
                            <HandleTeams />
                        </main>
                    ) : <Loading t={2} />
                }
            </div>
            <Footer />
        </>
    )
}