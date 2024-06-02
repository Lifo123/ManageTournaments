import React from 'react'
import './Styles/News.css'
import NewRow from './NewRow'

function News({ w }) {
    return (
        <ul className='nws-sec f-col p-0 mt-25' style={{ width: `${w}%` }}>
            <NewRow />
            <NewRow />
            <NewRow />
            <NewRow />
            <NewRow />
        </ul>
    )
}

export default News