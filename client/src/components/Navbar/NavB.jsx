import React from "react";
import "./Navbar.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";
export default function NavB() {
  return (
    <div>
      <Navbar className="navBar-main" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link className="Linkreact-style" to={"/"}>
              Mob-app
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link className="Linkreact-style" to={"/mobList"}>
                MobList
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="Linkreact-style" to={"/form"}>
                Form
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
