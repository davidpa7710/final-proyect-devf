import * as Icon from 'react-bootstrap-icons'
import * as Reveal from 'react-reveal'
import '../../src/App.css'

const Home = () => {

    return (
        <>
        {/* hero */}
       
            <div className="px-4 py-5 text-center text-white bg-hero img-fluid">
                <img className="d-block mx-auto mb-5" src="./src/assets/Copia de Logo F! Copy copiar.png" alt="" width={150} height={150} />
                <h1 className="display-5 fw-bold">Sigue de Cerca la Formula 1</h1>
                <div className="col-lg-6 mx-auto">
                <Reveal.Fade bottom>
                    <p className="lead mb-4 ligth">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    </Reveal.Fade>
                </div>
            </div>
            {/* pattern */}
            <div className="row mx-4 my-4">
           <Reveal.Fade left> 
        <div className="col-md-6">
          <div className="row g-0 bg-light border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-primary">Nuevo Post</strong>
              <h3 className="mb-0">Checo conquista Singapur</h3>
              <div className="mb-1 text-muted">Oct 2</div>
              <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="stretched-link">Continue reading</a>
            </div>
            <div className="col-auto d-none d-lg-block">
              <img src="./src/assets/twitter_FbLOLtUUcAAyJFs.jpg" width={200} height={250} alt="checoconquista" />
            </div>
          </div>
        </div>
        </Reveal.Fade>
        <Reveal.Fade right>
        <div className="col-md-6">
          <div className="row g-0 bg-light border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-success">Resumen de la Carrera</strong>
              <h3 className="mb-0">Post title</h3>
              <div className="mb-1 text-muted">Nov 11</div>
              <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="stretched-link">Continue reading</a>
            </div>
            <div className="col-auto d-none d-lg-block">
              <svg className="bd-placeholder-img" width={200} height={250} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            </div>
          </div>
        </div>
        </Reveal.Fade> 
      </div>
      {/* carousel */}
      <Reveal.Reveal>
      <div className="col mx-5 my-4">
        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{backgroundImage: 'url("./src/assets/twitter_FbLOLtUUcAAyJFs.jpg")'}}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold calendar">Previous Race <Icon.ArrowBarRight /></h2>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
               <small>Susuka International Circuit</small>
              </li>
              <li className="d-flex align-items-center me-3">
                <Icon.GeoFill />
                <small> Japan</small>
              </li>
              <li className="d-flex align-items-center">
                <small>3d <Icon.Calendar2Date /></small>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </Reveal.Reveal>
      <Reveal.Reveal>
      <div className="col mx-5 my-4">
        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{backgroundImage: 'url("./src/assets/twitter_FbLOLtUUcAAyJFs.jpg")'}}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold calendar">Next Race <Icon.ArrowBarRight /></h2>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
               <small>Susuka International Circuit</small>
              </li>
              <li className="d-flex align-items-center me-3">
                <Icon.GeoFill />
                <small> Japan</small>
              </li>
              <li className="d-flex align-items-center">
                <small>3d <Icon.Calendar2Date /></small>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </Reveal.Reveal>
      <Reveal.Reveal>
      <div className="col mx-5 my-4">
        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{backgroundImage: 'url("./src/assets/twitter_FbLOLtUUcAAyJFs.jpg")'}}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold calendar"> Upcoming Race <Icon.ArrowBarRight /></h2>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
               <small>Susuka International Circuit</small>
              </li>
              <li className="d-flex align-items-center me-3">
                <Icon.GeoFill />
                <small> Japan</small>
              </li>
              <li className="d-flex align-items-center">
                <small>3d <Icon.Calendar2Date /></small>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </Reveal.Reveal>
        </>
    )
}

export default Home
