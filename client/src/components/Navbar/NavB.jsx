import React from "react";
import "./Navbar.css";
import logo from '../../imgs/mobLogo.png'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";
export default function NavB() {
  return (
    <div className="nav-container-main">
      <Navbar className="navBar-main" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link className="Linkreact-style img-logo" to={"/"}>
                <img classsName='' src={logo} alt='appLogo'/>
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link className="Linkreact-style" to={"/mobList"}>
                MobList
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="Linkreact-style" to={"/mobCode"}>
                Code
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
