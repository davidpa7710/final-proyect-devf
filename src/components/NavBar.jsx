import React from 'react'
import { Link } from 'react-router-dom'
import '../../src/App.css'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container px-4 px-lg-5">
                    <Link to='/'>
                    <a className="navbar-brand"><img src="https://evwmyuagoicuvpebowmu.supabase.co/storage/v1/object/sign/images/Copia%20de%20Logo%20F!%20Copy%20copiar.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvQ29waWEgZGUgTG9nbyBGISBDb3B5IGNvcGlhci5wbmciLCJpYXQiOjE2NjU2MzMzNzksImV4cCI6MTk4MDk5MzM3OX0.JncL8FZKgfXGV3VO22gCzY1Tu2xV37bukeTALSAQfJc" alt="logo" width="50" height="50"></img></a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                            <Link to='/'>
                            <li className="nav-item">
                                <a className="nav-link active " aria-current="page"><i className="bi bi-house-fill"></i> Home</a></li>
                            </Link>
                            <Link to='/pilotos'>
                            
                            <li className="nav-item nav-underline"><a className="nav-link active"><i className="bi bi-person-fill"></i> Pilotos</a></li>
                            </Link>
                            <Link to='/escuderias'>
                            <li className="nav-item nav-underline"><a className="nav-link active" ><i className="bi bi-shield-fill"></i> Escuderias</a></li>
                            </Link>
                            <Link to='/articulos'>
                            <li className="nav-item nav-underline"><a className="nav-link active" ><i className="bi bi-newspaper"></i> Articulos</a></li>
                            </Link>
                            </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar