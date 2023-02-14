import React from "react";
import "./Form.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createMob } from "../../redux/actions";

export default function FormMob() {
  // const [lifeValue, setLifeValue] = useState(0);
  const [mobData, setMobData] = useState({
    name: "",
    type: "",
    life: "",
    team: "",
    color: "",
  });
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    console.log("data : ", e.target.name, " : ", e.target.value);
    setMobData({ ...mobData, [e.target.name]: e.target.value });
  };

  const handleCreateMob = (e) => {
    e.preventDefault();
    dispatch(createMob(mobData));
    // console.log('Submiteamos. La data cargada es:   ', mobData)
    // alert('Mob creado')
  };
  return (
    <div className="form-container">
      <form className="form-main" onSubmit={(e) => handleCreateMob(e)}>
        <h1 className="slide-in-blurred-left">MOB</h1>
        <div className="form-data">
          <Form.Group
            className=" slide-in-blurred-left formInput"
            controlId="formBasicEmail"
          >
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Enter name"
              onChange={(e) => handleInputChange(e)}
            />
          </Form.Group>

          <Form.Group className="slide-in-blurred-left formInput">
            <Form.Label>Team</Form.Label>
            <Form.Select
              className="mb-3 formInput"
              aria-label="Default select example"
              name={"team"}
              onChange={(e) => handleInputChange(e)}
            >
              <option>Select mob's team</option>
              <option value="boss">boss</option>
              <option value="ally">ally</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className=" slide-in-blurred-left formInput">
            <Form.Label>Type </Form.Label>

            <Form.Select
              className="mb-3  formInput"
              aria-label="Default select example"
              name={"type"}
              onChange={(e) => handleInputChange(e)}
            >
              <option>Select mob's type</option>
              <option value="zombie">Zombie</option>
              <option value="esqueleton">Esqueleton</option>
              <option value="creeper">Creeper</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="slide-in-blurred-left formInput">
            <Form.Label>Life</Form.Label>
            <div>
              <Form.Range
                name="life"
                max={1000}
                onChange={(e) => handleInputChange(e)}
                defaultValue={0}
              />
              <Form.Label className="lifeValue">{mobData.life} hp</Form.Label>
            </div>
          </Form.Group>

          <Form.Group
            className=" slide-in-blurred-left formInput"
            controlId="formBasicEmail"
          >
            <Form.Label>Color</Form.Label>
            <Form.Control
              name="color"
              type="text"
              placeholder="Enter color"
              onChange={(e) => handleInputChange(e)}
            />
          </Form.Group>
        </div>
        <Button
          className="slide-in-blurred-left-btnSubmit btn-submit"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
