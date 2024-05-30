import { useState } from 'react';
import './Styles/Tournament.css'

import Header from '../../../Components/Header/Header';
import News from '../../../Components/News/News';
import Footer from '../../../Components/Footer/Footer';
import Retroceso from '../../../Components/Retroceso/Retroceso';


export default function Tournament() {
    //States
    const [TournamentData, setTourData] = useState([
        { TourInfo: '', TourPool: '', TourTeams: '', TourMatchs: '' }
    ]);

    return (
        <>
            <Header />
            <div className='f-row w-100 f-justify-center'>
                <Retroceso text={'Back'} />
                <main className='game-main w-80 f-col mt-40'>

                </main>
            </div>
            <Footer />
        </>
    )
}