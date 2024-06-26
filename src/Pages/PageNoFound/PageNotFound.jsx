import './PageNotFound.css'
import { Link, useNavigate } from 'react-router-dom'

function PageNotFound() {
    const navigate = useNavigate();

    return (
        <div className='d-flex fixed h-100 w-100 f-justify-center'>
            <div className='f-col mt-70 f-align-center g-15'>
                <h1 className='err-title'>Error Page not found</h1>
                <Link className='err-btn br-max pointer' onClick={() => navigate(-1)}>Go Back</Link>
            </div>
        </div>
    )
}

export default PageNotFound