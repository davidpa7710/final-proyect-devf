import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import '../../src/App.css'
import { ArrowRight } from 'react-bootstrap-icons';

function Articulos() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.gq.com.mx/photos/615c9446118f84da8a122d7f/16:9/w_2560%2Cc_limit/SI202106060375_hires_jpeg_24bit_rgb.jpg"
            alt="First slide"
            height={700}
          />
          <Carousel.Caption>
            <h3>Checo Perez se lleva la victoria en Singapur</h3>
            <Link to='/articulo1'>
              <a> Checo Perez obtuvo su victoria en el GP de Singapur...</a>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn2.mediotiempo.com/uploads/media/2022/04/30/charles-leclerc-comenzado-favorito-temporada.jpg"
            alt="Second slide"
            height={700}
          />

          <Carousel.Caption>
            <h3>Charles Leclerc Recibe una penalizacion al final de la Carrera</h3>
            <p>El monegasco recibe una penalizacion al final de la carrera...</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/09/17/16634055330031.jpg"
            alt="Third slide"
            height={700}
          />

          <Carousel.Caption>
            <h3>Nyck Devries llega a Alpha Tauri</h3>
            <p>
              EL campeon de Formula E llega a ALpha Tauri luego de una increible demostracion...
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm">
                <svg className="bd-placeholder-img card-img-top" width="100%" height={225} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                <div className="card-body">
                  <p className="card-text">LEWIS HAMILTON VUELVE AL PODIO EN CANADA 🇨🇦🏆🏁🏎️
                    •Lewis vuelve al podio en Montreal luego de una gran carrera por parte del británico
                    •Gran día para Mercedes que se llevó el 3° y 4° puesto respectivamente. </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Leer <ArrowRight /> </button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <svg className="bd-placeholder-img card-img-top" width="100%" height={225} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                <div className="card-body">
                  <p className="card-text"> CARLOS SAINZ SE LLEVA SU PRIMERA POLE 🔥
• Con una condición climática cambiante y una Q3 con muchas modificaciones en el clasificador, Sainz marcó el mejor tiempo en Silverstone y su primer Pole
 </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Leer <ArrowRight /> </button>
                      
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <svg className="bd-placeholder-img card-img-top" width="100%" height={225} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                <div className="card-body">
                  <p className="card-text">CARLOS SAINZ CONSIGUE SU PRIMER VICTORIA EN SILVERSTONE 🏆🇬🇧😎👏🏼
•Enorme fin de semana para el español que se lleva la victoria luego un increíble cierre del español lo condujeron a su primer victoria en la categoría</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Leer <ArrowRight />  </button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <svg className="bd-placeholder-img card-img-top" width="100%" height={225} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                <div className="card-body">
                  <p className="card-text">MAX VERSTAPPEN SE LLEVA LA POLE EN AUSTRIA 🇦🇹🏁🏆
• El piloto Holandés logra la pole luego de una sólida clasificación por parte de Verstappen quien en la última vuelta lograría quedarse con la pole
• Los límites de pista fueron factor importante durante la Qualy pues a varios pilotos les sacaron los tiempos por excederlos </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">Leer <ArrowRight />  </button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <svg className="bd-placeholder-img card-img-top" width="100%" height={225} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                <div className="card-body">
                  <p className="card-text">MAX VERSTAPPEN SE LLEVA LA SPRINT RACE EN AUSTRIA 🇦🇹🏁🏆
• Gran actuación del piloto holandés que no tuvo ningún problema en llevarse la victoria
• Ambos pilotos de Ferrari intentaron pasar a Verstappen pero no fue suficiente para hacerle frente a Verstappen que salio con todo.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">Leer <ArrowRight />  </button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <svg className="bd-placeholder-img card-img-top" width="100%" height={225} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                <div className="card-body">
                  <p className="card-text">CHARLES LECLERC SE LLEVA LA POLE EN FRANCIA 🇫🇷🏆🏁
•El monegasco se lleva su pole número 16 luego de una sólida quali para el de Ferrari
•Charles sigue sumando poles está temporada que demuestra el gran nivel que tiene el monegasco.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">Leer <ArrowRight />  </button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <svg className="bd-placeholder-img card-img-top" width="100%" height={225} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                <div className="card-body">
                  <p className="card-text">VERSTAPPEN GANA EL GP DE FRANCIA 🇫🇷🏆🏁
•Gran carrera del Holandés para aumentar su ventaja con Leclerc
•Un trompo de Leclerc cambio las cosas para Max pues Charles quedó fuera y dejo pase libre para la victoria de Verstappen</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">Leer <ArrowRight />  </button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <svg className="bd-placeholder-img card-img-top" width="100%" height={225} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                <div className="card-body">
                  <p className="card-text">SEBASTIAN VETTEL SE RETIRA PARA EL FINAL DE LA TEMPORADA 🥺🥲
•El 4 veces campeón anuncia su retiro de la F1 para el final de esta temporada luego de:
53 victorias.
122 podios.
57 poles.
4 títulos mundiales.
4º piloto con más GPs.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">Leer <ArrowRight />  </button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Articulos
