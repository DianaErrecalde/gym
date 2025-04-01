import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Views/Login/login";
import Bienvenido from "./Views/Bienvenido/bienvenido";
import Contacto from "./Views/Contacto/contacto";
import EjerciciosABM from "./Views/Ejercicios/EjerciciosABM";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Bienvenido />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Contacto" element={<Contacto />} />
        <Route exact path="/Ejercicios" element={<EjerciciosABM/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
