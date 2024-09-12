import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <>
            <div className='d-flex justify-content-center flex-column align-items-center'>
                <div className="err-page text-center">404 Error Found</div>
                <Link to='/'>Back To Home</Link>
            </div>
        </>
    )
}

export default Error