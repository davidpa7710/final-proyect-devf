import React from 'react'
import * as Icon from 'react-bootstrap-icons'

const Footer = () => {
    return (
        <>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-4 mt-5 px-5 border-top bg-dark">
                <p className="col-md-4 mb-0 text-light">© 2022 GOF1MX, Inc</p>
                <a href="#" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <img src="./src/assets/Logo F! Copy-1(1).png" width={80} height={80} alt="Logo" />
                </a>
                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-light" href="https://twitter.com/gof1mx" target="_blank"><Icon.Twitter className="bi" width={34} height={34} /></a></li>
                    <li className="ms-3"><a className="text-light" href="https://www.facebook.com/gof1mx" target="_blank"><Icon.Facebook className="bi" width={34} height={34} /></a></li>
                    <li className="ms-3"><a className="text-light" href="https://www.instagram.com/gof1mx/" target="_blank"><Icon.Instagram className="bi" width={34} height={34} /></a></li>
                </ul>
            </footer>
        </>
    )
}

export default Footer
