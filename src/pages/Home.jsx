import * as Icon from 'react-bootstrap-icons'
import * as Reveal from 'react-reveal'
import { Link } from 'react-router-dom'
import '../../src/App.css'

const Home = () => {

  return (
    <>
      {/* hero */}

      <div className="px-4 py-5 text-center text-white bg-hero img-fluid">
        <img className="d-block mx-auto mb-5" src="https://evwmyuagoicuvpebowmu.supabase.co/storage/v1/object/sign/images/Copia%20de%20Logo%20F!%20Copy%20copiar.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvQ29waWEgZGUgTG9nbyBGISBDb3B5IGNvcGlhci5wbmciLCJpYXQiOjE2NjU2MzMzNzksImV4cCI6MTk4MDk5MzM3OX0.JncL8FZKgfXGV3VO22gCzY1Tu2xV37bukeTALSAQfJc" alt="" width={150} height={150} />
        <h1 className="display-5 fw-bold">Estamos trbajando para ofrecerte mejor contenido</h1>
        <div className="col-lg-6 mx-auto">
          <Reveal.Fade bottom>
            <p className="lead mb-4 ligth">Siguenos en nuestras redes sociales <br /> <br /><i class="fa-solid fa-arrow-down-long fa-bounce fa-xl"></i></p>
          </Reveal.Fade>
        </div>
        <Reveal.Fade>
          <div>
          <ul className="mt-5 justify-content-center list-unstyled d-flex">
            <li className="ms-3"><a className="text-light link-sm" href="https://twitter.com/gof1mx" target="_blank"><Icon.Twitter className="bi" width={54} height={54} /></a></li>
            <li className="ms-3"><a className="text-light link-sm" href="https://www.facebook.com/gof1mx" target="_blank"><Icon.Facebook className="bi" width={54} height={54} /></a></li>
            <li className="ms-3"><a className="text-light link-sm" href="https://www.instagram.com/gof1mx/" target="_blank"><Icon.Instagram className="bi" width={54} height={54} /></a></li>
          </ul>
          </div>
        </Reveal.Fade>
      </div>
      {/* pattern */}
      {/* <div className="row mx-4 my-4">
        <Reveal.Fade left>
          <div className="col-md-6">
            <div className="row g-0 bg-light border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">Nuevo Post</strong>
                <h3 className="mb-0">Checo conquista Singapur</h3>
                <div className="mb-1 text-muted">Oct 2</div>
                <p className="card-text mb-auto">El mexicano Checo Perez conquista las calles de Singapure con una brillante actuacion.</p>
                <Link to='/articulo1'>
                  <a className="stretched-link link-home">Seguir Leyendo...</a>
                </Link>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img src="https://holatelcel.com/wp-content/uploads/2022/10/Checo-Pe%CC%81rez-Singapur.png" width={200} height={250} alt="checoconquista" />
              </div>
            </div>
          </div>
        </Reveal.Fade>
        <Reveal.Fade right>
          <div className="col-md-6">
            <div className="row g-0 bg-light border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-success">Resumen de la Carrera</strong>
                <h3 className="mb-0">Japon Proclama un Nuevo Campeon</h3>
                <div className="mb-1 text-muted">OCT 8</div>
                <p className="mb-auto">La lluvia y varias sorpresas fueron factor en el emblematico Susuka</p>
                <Link to='/articulo2'>
                  <a className="stretched-link link-home">Sigue Leyendo...</a>
                </Link>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img src="https://memolira.com/wp-content/uploads/2022/10/Campeonato-Verstappen-1320x880.jpg" width={200} height={250} alt="post-image" />
              </div>
            </div>
          </div>
        </Reveal.Fade>
      </div> */}
      {/* carousel */}
      {/* <Reveal.Reveal>
        <div className="col mx-5 my-4">
          <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ backgroundImage: 'url("https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Japan.jpg.transform/12col/image.jpg")' }}>
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold calendar">Previous Race <Icon.ArrowBarRight /></h2>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <small>Susuka International Circuit</small>
                </li>
                <li className="d-flex align-items-center me-3">
                  <Icon.GeoFill />
                  <small>Japan</small>
                </li>
                <li className="d-flex align-items-center">
                  <small> 8 Oct <Icon.Calendar2Date /></small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Reveal.Reveal>
      <Reveal.Reveal>
        <div className="col mx-5 my-4">
          <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ backgroundImage: 'url("https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/USA.jpg.transform/12col/image.jpg")' }}>
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold calendar">Next Race <Icon.ArrowBarRight /></h2>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <small>Circuit of Americas</small>
                </li>
                <li className="d-flex align-items-center me-3">
                  <Icon.GeoFill />
                  <small>United States</small>
                </li>
                <li className="d-flex align-items-center">
                  <small>23 Oct <Icon.Calendar2Date /></small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Reveal.Reveal>
      <Reveal.Reveal>
        <div className="col mx-5 my-4">
          <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ backgroundImage: 'url("https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Mexico.jpg.transform/12col/image.jpg")' }}>
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold calendar"> Upcoming Race <Icon.ArrowBarRight /></h2>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <small>Autodromo Hermanos Rodriguez</small>
                </li>
                <li className="d-flex align-items-center me-3">
                  <Icon.GeoFill />
                  <small>Mexico</small>
                </li>
                <li className="d-flex align-items-center">
                  <small>30 Oct <Icon.Calendar2Date /></small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Reveal.Reveal> */}
    </>
  )
}

export default Home
