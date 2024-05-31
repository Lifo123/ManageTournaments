import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import './Styles/Tournament.css'

import Header from '../../../Components/Header/Header';
import News from '../../../Components/News/News';
import Footer from '../../../Components/Footer/Footer';
import Retroceso from '../../../Components/Retroceso/Retroceso';
import GrafficMatch from './Comps/GrafficMatch/GrafficMatch'
import Loading from '../../../Components/Loading/Loading';


export default function Tournament() {
    //GlobalStates
    const User = useContext(UserContext);

    //States
    const [TournamentData, setTourData] = useState(null);

    //Functions
    const HandleContentEditable = (e) => {
        e.target.parentElement.querySelectorAll('[edit]').forEach(element => {
            const isEditable = element.contentEditable === 'true';
            element.contentEditable = isEditable ? 'false' : 'true';
        });
    }

    useEffect(() => {
        setTimeout(() => {
            setTourData({
                TourInfo: 'Mundial Champion Ship|description Test',
                TourPool: 'num 1st|num 2nd|num 3rd|num 4th',
                TourTeams: {
                    A: 'A1|A2|A3|A4|A5|A6|A7|A8|A9|A10|A11|A12|A13|A14|A15|A16',
                    B: 'B1|B2|B3|B4|B5|B6|B7|B8|B9|B10|B11|B12|B13|B14|B15|B16',
                    C: 'C1|C2|C3|C4|C5|C6|C7|C8|C9|C10|C11|C12|C13|C14|C15|C16'
                },
                TourMatchs: {
                    A: { 1: 'A1.A2|A3.A4|A5.A6|A7.A8|A9.A10|A11.A12|A13.A14|A15.A16', 2: 'A1.A3|A5.A7|A9.A11|A13.A15', 3: 'A1.A5|A9.A13', 4: 'A1.A9' },
                    B: { 1: 'B1.B2|B3.B4|B5.B6|B7.B8|B9.B10|B11.B12|B13.B14|B15.B16', 2: 'B1.B3|B5.B7|B9.B11|B13.B15', 3: 'B1.B5|B9.B13', 4: 'B1.B9' },
                    C: { 1: 'C1.C2|C3.C4|C5.C6|C7.C8|C9.C10|C11.C12|C13.C14|C15.C16', 2: 'C1.C3|C5.C7|C9.C11|C13.C15', 3: 'C1.C5|C9.C13', 4: 'C1.C9' }
                }
            })
        }, 1000)
    }, [])

    return (
        <>
            <Header />
            <div className='f-row w-100 f-justify-center'>
                <Retroceso text={'Back'} />
                {
                    TournamentData ? (
                        <main className='w-80 f-col mt-40 g-20'>
                            <span className='btn btn-primary pointer d-flex f-align-self-end' onClick={HandleContentEditable}>Edit</span>
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
                            <div>
                                <h5>Teams</h5>
                                <div className='f-row g-60'>
                                    <ul className="f-col g-5">
                                        <p edit={'TgA'}>{TournamentData.TourTeams.A.split('|')[0]}</p>
                                        <p edit={'TgA'}>{TournamentData.TourTeams.A.split('|')[1]}</p>
                                        <p edit={'TgA'}>{TournamentData.TourTeams.A.split('|')[2]}</p>
                                        <p edit={'TgA'}>{TournamentData.TourTeams.A.split('|')[3]}</p>
                                        <p edit={'TgA'}>{TournamentData.TourTeams.A.split('|')[4]}</p>
                                        <p edit={'TgA'}>{TournamentData.TourTeams.A.split('|')[5]}</p>
                                        <p edit={'TgA'}>{TournamentData.TourTeams.A.split('|')[6]}</p>
                                        <p edit={'TgA'}>{TournamentData.TourTeams.A.split('|')[7]}</p>
                                        <p edit={'TgA'}>{TournamentData.TourTeams.A.split('|')[8]}</p>
                                        <p edit={'TgA'}>{TournamentData.TourTeams.A.split('|')[9]}</p>
                                        <p edit={'TgA'}>{TournamentData.TourTeams.A.split('|')[10]}</p>
                                        <p edit={'TgA'}>{TournamentData.TourTeams.A.split('|')[11]}</p>
                                        <p edit={'TgA'}>{TournamentData.TourTeams.A.split('|')[12]}</p>
                                        <p edit={'TgA'}>{TournamentData.TourTeams.A.split('|')[13]}</p>
                                        <p edit={'TgA'}>{TournamentData.TourTeams.A.split('|')[14]}</p>
                                        <p edit={'TgA'}>{TournamentData.TourTeams.A.split('|')[15]}</p>
                                    </ul>
                                    <ul className="f-col g-5">
                                        <p edit={'TgB'}>{TournamentData.TourTeams.B.split('|')[0]}</p>
                                        <p edit={'TgB'}>{TournamentData.TourTeams.B.split('|')[1]}</p>
                                        <p edit={'TgB'}>{TournamentData.TourTeams.B.split('|')[2]}</p>
                                        <p edit={'TgB'}>{TournamentData.TourTeams.B.split('|')[3]}</p>
                                        <p edit={'TgB'}>{TournamentData.TourTeams.B.split('|')[4]}</p>
                                        <p edit={'TgB'}>{TournamentData.TourTeams.B.split('|')[5]}</p>
                                        <p edit={'TgB'}>{TournamentData.TourTeams.B.split('|')[6]}</p>
                                        <p edit={'TgB'}>{TournamentData.TourTeams.B.split('|')[7]}</p>
                                        <p edit={'TgB'}>{TournamentData.TourTeams.B.split('|')[8]}</p>
                                        <p edit={'TgB'}>{TournamentData.TourTeams.B.split('|')[9]}</p>
                                        <p edit={'TgB'}>{TournamentData.TourTeams.B.split('|')[10]}</p>
                                        <p edit={'TgB'}>{TournamentData.TourTeams.B.split('|')[11]}</p>
                                        <p edit={'TgB'}>{TournamentData.TourTeams.B.split('|')[12]}</p>
                                        <p edit={'TgB'}>{TournamentData.TourTeams.B.split('|')[13]}</p>
                                        <p edit={'TgB'}>{TournamentData.TourTeams.B.split('|')[14]}</p>
                                        <p edit={'TgB'}>{TournamentData.TourTeams.B.split('|')[15]}</p>
                                    </ul>
                                    <ul className="f-col g-5">
                                        <p edit={'TgC'}>{TournamentData.TourTeams.C.split('|')[0]}</p>
                                        <p edit={'TgC'}>{TournamentData.TourTeams.C.split('|')[1]}</p>
                                        <p edit={'TgC'}>{TournamentData.TourTeams.C.split('|')[2]}</p>
                                        <p edit={'TgC'}>{TournamentData.TourTeams.C.split('|')[3]}</p>
                                        <p edit={'TgC'}>{TournamentData.TourTeams.C.split('|')[4]}</p>
                                        <p edit={'TgC'}>{TournamentData.TourTeams.C.split('|')[5]}</p>
                                        <p edit={'TgC'}>{TournamentData.TourTeams.C.split('|')[6]}</p>
                                        <p edit={'TgC'}>{TournamentData.TourTeams.C.split('|')[7]}</p>
                                        <p edit={'TgC'}>{TournamentData.TourTeams.C.split('|')[8]}</p>
                                        <p edit={'TgC'}>{TournamentData.TourTeams.C.split('|')[9]}</p>
                                        <p edit={'TgC'}>{TournamentData.TourTeams.C.split('|')[10]}</p>
                                        <p edit={'TgC'}>{TournamentData.TourTeams.C.split('|')[11]}</p>
                                        <p edit={'TgC'}>{TournamentData.TourTeams.C.split('|')[12]}</p>
                                        <p edit={'TgC'}>{TournamentData.TourTeams.C.split('|')[13]}</p>
                                        <p edit={'TgC'}>{TournamentData.TourTeams.C.split('|')[14]}</p>
                                        <p edit={'TgC'}>{TournamentData.TourTeams.C.split('|')[15]}</p>
                                    </ul>
                                </div>
                            </div>
                            <div className=''>
                                <h4>Matchs</h4>
                            </div>
                            <GrafficMatch scale={0.9} data={TournamentData.TourMatchs} />
                        </main>
                    ) : <Loading t={2}/>
                }
            </div>
            <Footer />
        </>
    )
}