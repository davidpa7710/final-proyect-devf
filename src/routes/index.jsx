import { Routes, Route } from "react-router-dom";
import Pilotos from "../pages/Pilotos";
import Home from "../pages/Home";
import Escuderias from "../pages/Escuderias";
import Articulos from "../pages/Articulos";

const RoutesIndex = () =>{
    return(
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pilotos' element={<Pilotos />} />
        <Route path='/escuderias' element={<Escuderias />} />
        <Route path='/articulos' element={<Articulos />} />
    </Routes>
    )
}

export default RoutesIndex
