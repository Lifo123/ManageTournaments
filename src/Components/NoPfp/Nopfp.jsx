function Nopfp({ Auth }) {
    return (
        <>
            {
                Auth ? (
                    <span className='pfp br-50 d-flex pointer'></span>
                ) : (
                    <span className='nopfp br-50 relative d-flex pointer'>
                        <span className='nopfp-head br-50 absolute no-select'></span>
                        <span className='nopfp-quad absolute no-select'></span>
                    </span>
                )
            }
        </>
    )
}

export default Nopfp