"use client"
import { useEffect } from "react";
import Navbar from "./Components/NavBar";
import Grid from "./Components/Grid";
import Carrousel from "./Components/Carrousel";
import Formulario from "./Components/Formulario";
import Tabla from "./Components/Tabla";
import Modal from "./Components/Modal";
import Tarjetas from "./Components/Tarjetas";
import Utils from "./Components/Utils";
import Precios from "./Components/Precios";
import Login from "./Components/Login";

export default function Home() {
    useEffect(() => {
      import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

  return (
    <div>
      <Navbar/>
      <Grid/>
      <Carrousel/>
      <Formulario/>
      <Tabla/>
      <Modal/>
      <Tarjetas/>
      <Utils/>
      <Precios/>
      <Login/>
    </div>
  );
}
