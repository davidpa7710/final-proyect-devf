import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import '../../src/App.css'

function Articulos() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
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
          <a> Max Verstappen obtuvo su victoria en el GP de Japón...</a>
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
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Articulos
