import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Views/Login/login";
import Bienvenido from "./Views/Bienvenido/bienvenido";
import Contacto from "./Views/Contacto/contacto";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Bienvenido />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
