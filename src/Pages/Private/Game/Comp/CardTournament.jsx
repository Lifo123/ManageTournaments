import { useNavigate } from "react-router-dom"


export default function CardTournament({ title, desc, id }) {
    const navigate = useNavigate();

    const HandleNavigate = () => {
        navigate(`/Tournament/View/${id}`)
    }

    return (
        <li className='gm-list g-10 br-6 pointer' onClick={HandleNavigate}>
            <label className='f-col relative g-5 no-select'>
                <h2 className='ps-3 pointer hm-font-h2'>{title || 'Game Name'}</h2>
                <p className='hm-font-p'>{desc || 'Description'}</p>
            </label>
        </li>
    )
}
