import { createContext, useState } from 'react';

import TournamentR from './TournamentR';
import { SearchSort } from '../../../Functions/Sort.js'

//LocalContext
export const TourInfoContext = createContext();



export default function Tournament() {
    //LocalContext
    const [TourInfo, setTourInfo] = useState({
        TourInfo: '',
        TourPool: '',
    });
    const [TourTeams, setTourTeams] = useState({});
    const [Save, setSave] = useState(false);

    return (
        <TourInfoContext.Provider value={{
            TourTeams, setTourTeams,
            TourInfo, setTourInfo,
            Save, setSave,
            SearchSort
        }}>
            <TournamentR />
        </TourInfoContext.Provider>
    )
}