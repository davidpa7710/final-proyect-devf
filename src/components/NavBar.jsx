import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container px-4 px-lg-5">
                    <Link to='/'>
                    <a className="navbar-brand"><img src="./src/assets/Copia de Logo F! Copy copiar.png" alt="logo" width="50" height="50"></img></a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                            <Link to='/'>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page"><i className="bi bi-house-fill"></i> Home</a></li>
                            </Link>
                            <Link to='/pilotos'>
                            
                            <li className="nav-item"><a className="nav-link active"><i className="bi bi-person-fill"></i> Pilotos</a></li>
                            </Link>
                            <Link to='/escuderias'>
                            <li className="nav-item"><a className="nav-link active" ><i className="bi bi-shield-fill"></i> Escuderias</a></li>
                            </Link>
                            </ul>
                        <form className="d-flex">
                            <Link to='/signin'>
                            <button className='btn btn-outline-light me-3'>Sign Up</button>
                            </Link>
                            <Link to='/login'>
                            <button className='btn btn-outline-light me-3'>Login</button>
                            </Link>
                           </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar