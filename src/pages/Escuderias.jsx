import React from 'react'
import * as Icon from 'react-bootstrap-icons'
import * as Reveal from 'react-reveal'
import { Link } from 'react-router-dom'
import '../../src/App.css'

const Escuderias = () => {
    return (
        <>
        <Reveal.Reveal>
        <div className="col mx-5 my-4">
          <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ backgroundImage: 'url("https://pbs.twimg.com/media/FLKmA47WYAI91Ji.jpg:large")' }}>
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold calendar">Red Bull Racing<Icon.ArrowBarRight /></h2>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <small>Max Verstappen / Sergio Perez</small>
                </li>
                <li className="d-flex align-items-center me-3">
                  <h3><Icon.GeoFill /> Milton Keys</h3>
                </li>
                <li className="d-flex align-items-center">
                  <h3> 654 pts </h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Reveal.Reveal>
      <Reveal.Reveal>
        <div className="col mx-5 my-4">
          <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ backgroundImage: 'url("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mercedes-w12-12-1614682044.jpg")' }}>
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold calendar">Mercedes AMG Petronas<Icon.ArrowBarRight /></h2>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <small>George Russel / Lewis Hamilton</small>
                </li>
                <li className="d-flex align-items-center me-3">
                  <h3><Icon.GeoFill /> Spilberg </h3>
                </li>
                <li className="d-flex align-items-center">
                  <h3>435 pts </h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Reveal.Reveal>
      <Reveal.Reveal>
        <div className="col mx-5 my-4">
          <div className="card card-cover h-100 overflow-hidden text-dark bg-dark rounded-5 shadow-lg" style={{ backgroundImage: 'url("https://cdn-6.motorsport.com/images/mgl/0JBn1OO0/s8/ferrari-f1-75-1.jpg")' }}>
            <div className="d-flex flex-column h-100 p-5 pb-3 text-dark text-shadow-1">
              <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold calendar">Scuderia Ferrari<Icon.ArrowBarRight /></h2>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <h3>Charles Leclerc / Carlos Sainz </h3>
                </li>
                <li className="d-flex align-items-center me-3">
                  <h3><Icon.GeoFill /> Maranello </h3>
                </li>
                <li className="d-flex align-items-center">
                  <h3>545 pts </h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Reveal.Reveal>
        </>
    )
}

export default Escuderias
