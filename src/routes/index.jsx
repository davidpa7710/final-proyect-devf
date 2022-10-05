import { Routes, Route } from "react-router-dom";
import Pilotos from "../pages/Pilotos";
import Home from "../pages/Home";
import Escuderias from "../pages/Escuderias";
import SignIn from "../pages/SignIn";
import Login from "../pages/Login";

const RoutesIndex = () =>{
    return(
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pilotos' element={<Pilotos />} />
        <Route path='/escuderias' element={<Escuderias />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/login' element={<Login />} />
    </Routes>
    )
}

export default RoutesIndex
