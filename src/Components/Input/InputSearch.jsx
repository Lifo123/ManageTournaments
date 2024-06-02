export default function InputSearch({ text, i, funct }) {

    //Functions
    const HandleFocus = (e) => {
        e.target.nextSibling.classList.add('lr-p-a')
    }

    const HandleBlur = (e) => {
        if (e.target.value === '') {
            e.target.nextSibling.classList.remove('lr-p-a');
        }
    }

    const HandleSearch = (e) => {
      funct(e.target.value)
    }

    return (
        <span className='lr-in d-flex flex-column relative'>
            {i ? <span className="ski absolute pointer">{i}</span> : null}
            <input className="input" type='text' onFocus={HandleFocus} onBlur={HandleBlur} onChange={HandleSearch} />
            <p className='in-p absolute no-select'>{text || 'Search'}</p>
        </span>
    )
}