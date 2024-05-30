function Input({ t, text, n, f, i, atr }) {

    //Functions
    const HandleFocus = (e) => {
        e.target.nextSibling.classList.add('lr-p-a')
    }

    const HandleBlur = (e) => {
        if (e.target.value === '') {
            e.target.nextSibling.classList.remove('lr-p-a');
        }
    }

    return (
        <span className='lr-in d-flex flex-column relative'>
            {f ? <span className="ski absolute pointer" onClick={f}>{i || null}</span> : null}
            <input className="input" type={t || 'text'} name={n || null} onFocus={HandleFocus} onBlur={HandleBlur} atr={atr}/>
            <p className='in-p absolute no-select'>{text || 'Enter data'}</p>
        </span>
    )
}

export default Input