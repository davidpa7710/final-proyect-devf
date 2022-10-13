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
                  <small>George Russell / Lewis Hamilton</small>
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
      <Reveal.Reveal>
        <div className="col mx-5 my-4">
          <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ backgroundImage: 'url("https://cdn-1.motorsport.com/images/amp/YXR93pK0/s6/mclaren-2022-f1-car-1.jpg")' }}>
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold calendar">Mclaren F1 Team<Icon.ArrowBarRight /></h2>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <small>Lando Norris / Daniel Ricciardo</small>
                </li>
                <li className="d-flex align-items-center me-3">
                  <h3><Icon.GeoFill /> Woking</h3>
                </li>
                <li className="d-flex align-items-center">
                  <h3> 254 pts </h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Reveal.Reveal>
      <Reveal.Reveal>
        <div className="col mx-5 my-4">
          <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ backgroundImage: 'url("https://images3.alphacoders.com/121/1215697.jpg")' }}>
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold calendar">Alpine F1 Team <Icon.ArrowBarRight /></h2>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <small>Esteban Ocon  / Fernando Alonso</small>
                </li>
                <li className="d-flex align-items-center me-3">
                  <h3><Icon.GeoFill /> France </h3>
                </li>
                <li className="d-flex align-items-center">
                  <h3>215 pts </h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Reveal.Reveal>
      <Reveal.Reveal>
        <div className="col mx-5 my-4">
          <div className="card card-cover h-100 overflow-hidden text-dark bg-dark rounded-5 shadow-lg" style={{ backgroundImage: 'url("https://phantom-marca.unidadeditorial.es/834ed1b0d95699f323635c3506de9647/resize/1320/f/jpg/assets/multimedia/imagenes/2022/02/10/16445031932462.jpg")' }}>
            <div className="d-flex flex-column h-100 p-5 pb-3 text-dark text-shadow-1">
              <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold calendar">Aston Martin F1<Icon.ArrowBarRight /></h2>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <h3>Sebastian Vettel  / Lance Stroll </h3>
                </li>
                <li className="d-flex align-items-center me-3">
                  <h3><Icon.GeoFill /> Silverstone </h3>
                </li>
                <li className="d-flex align-items-center">
                  <h3>145 pts </h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Reveal.Reveal>
      <Reveal.Reveal>
        <div className="col mx-5 my-4">
          <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ backgroundImage: 'url("https://images.daznservices.com/di/library/DAZN_News/51/29/at03_186tv1wbclq211pmbejmcztl19.jpg?t=-125135738e")' }}>
            <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1 text-dark">
              <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 text-dark fw-bold calendar">Alpha Tauri<Icon.ArrowBarRight /></h2>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <small>Pierre Gasly / Yuki Tsunoda</small>
                </li>
                <li className="d-flex align-items-center me-3">
                  <h3><Icon.GeoFill /> Imola</h3>
                </li>
                <li className="d-flex align-items-center">
                  <h3> 84 pts </h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Reveal.Reveal>
      <Reveal.Reveal>
        <div className="col mx-5 my-4">
          <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ backgroundImage: 'url("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/c42-1645950734.jpg")' }}>
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold calendar">Alfa Romeo Racing <Icon.ArrowBarRight /></h2>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <small>Valtteri Bottas / Guayou Zhou </small>
                </li>
                <li className="d-flex align-items-center me-3">
                  <h3><Icon.GeoFill /> Maranello </h3>
                </li>
                <li className="d-flex align-items-center">
                  <h3>95 pts </h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Reveal.Reveal>
      <Reveal.Reveal>
        <div className="col mx-5 my-4">
          <div className="card card-cover h-100 overflow-hidden text-dark bg-dark rounded-5 shadow-lg" style={{ backgroundImage: 'url("https://e00-especiales-marca.uecdn.es/motor/images/formula1/seo/seo-especial2022-williams.jpg")' }}>
            <div className="d-flex flex-column h-100 p-5 pb-3 text-dark text-shadow-1">
              <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold calendar">Williams Racing<Icon.ArrowBarRight /></h2>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <h3>Alex Albon / Nicholas Latifi </h3>
                </li>
                <li className="d-flex align-items-center me-3">
                  <h3><Icon.GeoFill /> Silverstone </h3>
                </li>
                <li className="d-flex align-items-center">
                  <h3> 45 pts </h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Reveal.Reveal>
      <Reveal.Reveal>
        <div className="col mx-5 my-4">
          <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ backgroundImage: 'url("https://media.gq.com.mx/photos/61fe95e20d61eb9ba69a4744/16:9/w_2560%2Cc_limit/Haas%2520VF-22%25201.jpg")' }}>
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold calendar">Hass F1 Team<Icon.ArrowBarRight /></h2>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <h3> Mick Schumacher / Kevin Magnussen </h3>
                </li>
                <li className="d-flex align-items-center me-3">
                  <h3><Icon.GeoFill /> Austin </h3>
                </li>
                <li className="d-flex align-items-center">
                  <h3> 25 pts </h3>
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
