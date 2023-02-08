import React from "react";
import "./Form.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
export default function FormMob() {
  const [teamState, setTeamState] = useState(true);
  const [lifeValue, setLifeValue] = useState(0);
  const handleInputChange = (e) => {
    console.log("NOMBRE : ", e.target.value);
  };
  const handleLife = (e) => {
    setLifeValue(e.target.value);
  };
  const handleTeam = () => {
    if (teamState) {
      setTeamState(false);
    } else {
      setTeamState(true);
    }
  };
  return (
    <div className="form-main">
      <h1>MOB</h1>
      <div className="form-data">
        <Form.Group className=" formInput" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Enter name"
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Group>
        <Form.Group className=" formInput" controlId="formBasicEmail">
          <Form.Label>Team</Form.Label>
          <div className="teamInput">
            <Button
              variant={teamState ? "success" : "outline-success"}
              onClick={handleTeam}
            >
              Boss
            </Button>
            <Form.Control
              name="name"
              type="text"
              placeholder="Enter team"
              disabled={teamState}
            />
          </div>
        </Form.Group>

        <Form.Group className=" formInput">
          <Form.Label>Type </Form.Label>

          <Form.Select
            className="mb-3 formInput"
            aria-label="Default select example"
          >
            <option>Select mob's type</option>
            <option value="1">Type 1</option>
            <option value="2">Type 2</option>
            <option value="3">Type 3</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className=" formInput">
          <Form.Label>Life</Form.Label>
          <div>
            <Form.Range
              max={1000}
              onChange={(e) => handleLife(e)}
              defaultValue={0}
            />
            <Form.Label className="lifeValue">{lifeValue} hp</Form.Label>
          </div>
        </Form.Group>

        <Form.Group className=" formInput" controlId="formBasicEmail">
          <Form.Label>Color</Form.Label>
        </Form.Group>
      </div>
      <Button className="btn-submit" variant="primary" type="submit">
        Submit
      </Button>
    </div>
  );
}
