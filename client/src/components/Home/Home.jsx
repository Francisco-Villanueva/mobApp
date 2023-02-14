import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import mobImg from "../../imgs/mobs.webp";
import craft from "../../imgs/craft.webp";
import NavB from "../Navbar/NavB";
export default function Home() {
  return (
    <div className="home-main">
      <h1 className="title-home">Mob APP</h1>
      <img src={craft} alt="" />
    </div>
  );
}
