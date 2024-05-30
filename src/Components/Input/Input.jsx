function Input({ t, text, n, f, i, atr, enter }) {

    //Functions
    const HandleFocus = (e) => {
        e.target.nextSibling.classList.add('lr-p-a')
    }

    const HandleBlur = (e) => {
        if (e.target.value === '') {
            e.target.nextSibling.classList.remove('lr-p-a');
        }
    }

    const HandleEnter = (e) => {
        e.key === 'Enter' ? enter() : console.log('Err');
    }

    return (
        <span className='lr-in d-flex flex-column relative'>
            {f ? <span className="ski absolute pointer" onClick={f}>{i || null}</span> : null}
            <input className="input" type={t || 'text'} name={n || null} onFocus={HandleFocus} onBlur={HandleBlur} atr={atr} onKeyDown={enter ? HandleEnter : null}/>
            <p className='in-p absolute no-select'>{text || 'Attribute "text={`PlaceHolder`}"'}</p>
        </span>
    )
}

export default Input