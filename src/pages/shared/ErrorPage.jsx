import React from 'react'
import { Button} from 'react-bootstrap'
import { Link} from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div>
            <div>
                <img style={{ objectFit: 'contain', width: '100vh', height: '80vh' }}
                    className="d-block w-100"
                    src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=826&t=st=1683032737~exp=1683033337~hmac=7d16ea2b1b3ca853f0413bbe6cb22dabacdd76c7467e900e327983861f32052d" alt="" srcset="" />
            </div>

            <div className='d-flex justify-content-center align-items-center'>
                <Link to='/'>
                    <Button className='btn btn-secondary '>Go Home</Button>
                </Link>
            </div>
        </div>
    )
}

export default ErrorPage
