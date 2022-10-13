import { Routes, Route } from "react-router-dom";
import Pilotos from "../pages/Pilotos";
import Home from "../pages/Home";
import Escuderias from "../pages/Escuderias";
import Articulos from "../pages/Articulos";
import Articulo1 from "../pages/articulos/Articulo1"

const RoutesIndex = () =>{
    return(
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pilotos' element={<Pilotos />} />
        <Route path='/escuderias' element={<Escuderias />} />
        <Route path='/articulos' element={<Articulos />} />
        <Route path='/articulo1' element={<Articulo1 />} />
    </Routes>
    )
}

export default RoutesIndex
