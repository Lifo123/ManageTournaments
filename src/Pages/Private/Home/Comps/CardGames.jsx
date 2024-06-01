import { useNavigate } from "react-router-dom"

export default function CardGames({ title, desc }) {
    const navigate = useNavigate();

    const HandleNavigate = () => {
        let url = title.replace(/\s+/g, '-');
        navigate(`/ManageTournaments/Game?g=${url}`);
    }
    return (
        <li className='hm-crdgame g-10 br-6 pointer' onClick={HandleNavigate}>
            <label className='f-col relative g-5 no-select'>
                <h2 className='ps-3 pointer hm-font-h2'>{title || 'Game Name'}</h2>
                <p className='hm-font-p'>{desc || 'Description'}</p>
            </label>
        </li>
    )
}
