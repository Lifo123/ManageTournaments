import './Styles/Game.css'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../../../Components/Header/Header';
import News from '../../../Components/News/News';
import Footer from '../../../Components/Footer/Footer';
import Retroceso from '../../../Components/Retroceso/Retroceso';
import InputSearch from '../../../Components/Input/InputSearch';
import CardTournament from './Comp/CardTournament';

export default function Game() {
    //URL
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const game = searchParams.get('g').replace(/-/g, ' ');

    //States
    const [Tournaments, setTournaments] = useState([
        { title: 'Tournament Name', desc: 'Tournaments of Dota 2', id: 1 },
        { title: 'Tournament Name', desc: 'Tournaments of Dota 2', id: 2 },
        { title: 'Tournament Name', desc: 'Tournaments of Dota 2', id: 3 },
        { title: 'Tournament Bootcamp', desc: 'Tournaments of Dota 2', id: 4 },
        { title: 'Tournament ESL', desc: 'Tournaments of League of Legends', id: 5 },
        { title: 'Tournament Epilog', desc: 'Tournaments of Chess', id: 6 }
    ]);
    const [searchTerm, setSearchTerm] = useState('');

    //Functions
    const filteredTournaments = Tournaments.filter(item =>
        item.title && item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Header />
            <div className='f-row w-100 f-justify-center'>
                <Retroceso text={'Back'} />
                <main className='game-main w-80 f-col mt-40'>
                    <h2 className='a-fnt-3 text-left ms-5'>{game}</h2>
                    <div className='f-row g-80 mt-40 ms-5'>
                        <div className='f-col w-70 g-25'>
                            <span className='d-flex gm-src pb-3'>
                                <InputSearch text={'Search Game'} funct={setSearchTerm} />
                            </span>
                            <ul className='hm-crdzone f-col g-20 w-95 m-auto'>
                                {
                                    filteredTournaments.map((item, index) => (
                                        <CardTournament key={index} title={item.title} desc={item.desc} id={item.id} />
                                    ))
                                }
                                <span className='btn btn-primary w-100 text-center pointer py-15 mt-15'>Ver mas</span>
                            </ul>
                        </div>
                        <News />
                    </div>
                </main>
            </div>
            <Footer />
        </>
    )
}
