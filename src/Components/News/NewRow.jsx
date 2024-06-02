import React from 'react'

function NewRow() {
    return (
        <li className='nws-row f-row g-15 pointer'>
            <span className='d-flex br-6p no-select'></span>    
            <div className='nws-text f-col f-justify-center no-select'>
                <p className='m-0 br-max fnt-s11'>Categoria</p>
                <h4 className='m-0 fnt-s15'>Titulo de una Noticia Importante Creada por el Admin</h4>
            </div>
        </li>
    )
}

export default NewRow