import { useNavigate } from "react-router-dom"

export default function CardGames({ game, desc }) {
    const navigate = useNavigate();

    const HandleNavigate = () => {
        let url = game.replace(/\s+/g, '').replace(/:/g, '');
        navigate(`/Game/${url}`);
    }
    return (
        <li className='hm-crdgame g-10 br-6 pointer' onClick={HandleNavigate}>
            <label className='f-col relative g-5 no-select'>
                <h2 className='ps-3 pointer hm-font-h2'>{game || 'Game Name'}</h2>
                <p className='hm-font-p'>{desc || 'Description'}</p>
            </label>
        </li>
    )
}
