import { useState } from 'react';
import './Styles/Home.css'

import Header from '../../../Components/Header/Header';
import CardGames from './Comps/CardGames';
import News from '../../../Components/News/News';
import Footer from '../../../Components/Footer/Footer';
import InputSearch from '../../../Components/Input/InputSearch';
import { SearchSort } from '../../../Functions/Sort';


export default function Home() {
  //States
  const [Games, setGames] = useState([
    { game: 'Dota 2', desc: 'Tournaments of Dota 2' },
    { game: 'Left 4 Dead 2', desc: 'Tournaments of Dota 2' },
    { game: 'CSGO', desc: 'Tournaments of Dota 2' },
    { game: 'Overwatch', desc: 'Tournaments of Dota 2' },
    { game: 'League of Legends', desc: 'Tournaments of League of Legends' },
    { game: 'Chess', desc: 'Tournaments of Chess' }
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  //Functions

  const filteredGames = SearchSort(Games, searchTerm);

  return (
    <>
      <Header />
      <main className='home-main w-80 f-col mt-40'>
        <h2 className='a-fnt-3 text-left'>Current Games</h2>
        <div className='f-row g-80 mt-40'>
          <div className='f-col w-70 g-25'>
            <span className='d-flex hm-search pb-3'>
              <InputSearch text={'Search Game'} funct={setSearchTerm} />
            </span>
            <ul className='hm-crdzone f-col g-20'>
              {
                filteredGames.map((item, index) => (
                  <CardGames key={index} title={item.game} desc={item.desc} />
                ))
              }
            </ul>
          </div>
          <News w={30}/>
        </div>
      </main>
      <Footer />
    </>
  )
}