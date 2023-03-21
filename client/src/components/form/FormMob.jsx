import React, { useEffect } from "react";
import "./Form.css";
import { Button, Modal, Form } from "react-bootstrap";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createMob, editMob, getMobInfo } from "../../redux/actions";
import { useParams } from "react-router-dom";

export default function FormMob({
  mobToEdit,
  editing,
  showModal,
  id,
  handleCloseModal,
  models,
}) {
  const dispatch = useDispatch();

  const [mobData, setMobData] = useState({
    name: "",
    type: [],
    team: "",
    color: "",
  });

  const handleInputChange = (e) => {
    if (e.target.name === "type") {
      let modelFilt = models.filter((t) => t.modelname == e.target.value);
      setMobData({
        ...mobData,
        [e.target.name]: [
          e.target.value,
          modelFilt[0].modeltype,
          modelFilt[0].spawnegg,
        ],
      });
      // setMobData({ ...mobData, ["spawnegg"]: modelFilt[0].spawnegg });
    } else {
      setMobData({ ...mobData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editing) {
      dispatch(editMob(id, mobData));
    } else {
      dispatch(createMob(mobData));
      setMobData({
        name: "",
        team: "",
        color: "",
        type: "",
        life: "",
      });
    }
  };

  return (
    <div className="form-container">
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{editing ? "Editar Mob" : "Crear Mob"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="  formInput" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                autoComplete="off"
                name="name"
                type="text"
                placeholder="Enter name"
                defaultValue={editing ? mobToEdit.name : ""}
                onChange={(e) => handleInputChange(e)}
              />
            </Form.Group>
            <Form.Group className="formInput">
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
            <Form.Group className=" formInput">
              <Form.Label>Team</Form.Label>
              <Form.Select
                className="mb-3 formInput"
                aria-label="Default select example"
                name={"team"}
                defaultValue={editing ? mobToEdit.team : ""}
                onChange={(e) => handleInputChange(e)}
              >
                <option>Select mob's team</option>
                <option value="Boss">Boss</option>
                <option value="Ally">Ally</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className=" formInput">
              <Form.Label>Type </Form.Label>

              <Form.Select
                className="mb-3  formInput"
                aria-label="Default select example"
                name={"type"}
                defaultValue={editing ? mobToEdit.mobtype : ""}
                onChange={(e) => handleInputChange(e)}
              >
                <option>Select mob's type</option>
                {models.map((m) => (
                  <option value={m.modelname}>{m.modelname}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="  formInput" controlId="formBasicEmail">
              <Form.Label>Color</Form.Label>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Form.Label> {mobData.color}</Form.Label>
                <input
                  className="input-color"
                  id="colorPicker"
                  type="color"
                  defaultValue={editing ? mobToEdit.color : ""}
                  contentEditable={true}
                  name="color"
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
            </Form.Group>

            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
