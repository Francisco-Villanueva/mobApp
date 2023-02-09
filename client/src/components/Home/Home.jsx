import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import mobImg from "../../imgs/mobs.webp";
import craft from "../../imgs/craft.webp";
export default function Home() {
  return (
    <div className="home-main">
      <div className="header">
        <h2>Mobb App</h2>
      </div>
      <div className="Link-container">
        <div className="link-style">
          <Link className="LinkS" to={"/form"}>
            <img src={craft} alt="craft" />
            <p>Form</p>
            <div className="titulo-a-desplegar">
              <p>Entrar el formulario de creación de mobs</p>
            </div>
          </Link>
        </div>
        <div className="link-style">
          <Link className="LinkS flip-2-ver-right-fwd " to={"/mobList"}>
            <img src={mobImg} alt="mobs" />
            <p>Lista de mobs</p>
            <div className="titulo-a-desplegar">
              <p>Ver listado de mobs</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
