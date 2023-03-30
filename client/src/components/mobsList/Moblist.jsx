import React, { useState } from "react";
import "./MobList.css";

import Table from "react-bootstrap/Table";
import { Button, Modal, Form } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faCode,
  faPenToSquare,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { deleteMob, editMob, getMobInfo } from "../../redux/actions";

import Swal from "sweetalert2";
import FormMob from "../form/FormMob";

export default function MobList({ mobs, models }) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(false);
  const [idM, setIdm] = useState("");
  const [mobToEdit, setMobToEdit] = useState("");

  const handleCloseModal = () => {
    setShowModal(false);
    setMobToEdit(() => "");
    console.log("ENTRO AL CLOSE MODAL!, MOB TO EDIT:  ", mobToEdit);
  };

  const handleShowModalEdit = (mob) => {
    setIdm(mob.id);
    setMobToEdit(mob);
    // setShowModal(true);
    setEditing((s) => {
      s = true;
    });
  };
  const handleShowModal = () => {
    console.log("ENTRO AL SHOW MODAL!, MOB TO EDIT:  ", mobToEdit);

    setShowModal(true);
    setEditing(false);
  };

  const allyArr = mobs.filter((m) => m.team !== "Boss");
  const bossArr = mobs.filter((m) => m.team !== "Ally");

  const mobsOrder = bossArr.concat(allyArr);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Mob!",
      icon: "warning",
      iconColor: "#000",
      confirmButtonText: "Yes, delete it!",
      showCancelButton: true,
      dangerMode: true,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteMob(id));
        Swal.fire(" Your Mob has been deleted!", {
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="  mobList-container">
      <Table className="scale-in-ver-top" striped bordered hover>
        <thead
          style={{ background: "#4e5ba9", fontWeight: "800", color: "#fff" }}
        >
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Team</th>
            <th>Life</th>
            <th>Color</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {mobs.length !== 0 ? (
            bossArr.map((m, i) => (
              <tr
                // style={{ backgroundColor: `${m.color}` }}
                className="table-row"
                key={m.id}
              >
                <td>B {i + 1}</td>
                <td>{editing === false ? m.name : <input type="text" />}</td>
                <td>{editing === false ? m.team : <input type="text" />}</td>
                <td>{m.life}</td>
                <td>
                  <input type="color" value={m.color} disabled={true} />{" "}
                </td>
                <td>{m.mobtype[0]}</td>
                <td>
                  <button
                    onClick={() => handleDelete(m.id)}
                    className="btnForm-style"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <button
                    className="btnForm-style"
                    onClick={() => handleShowModalEdit(m)}
                  >
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <div className="noMobs">
              <b> no boss !</b>
            </div>
          )}
        </tbody>
        <tbody>
          {mobs.length !== 0 ? (
            allyArr.map((m, i) => (
              <tr
                // style={{ backgroundColor: `${m.color}` }}
                className="table-row"
                key={m.id}
              >
                <td>A {i + 1}</td>
                <td>{m.name}</td>
                <td>{m.team}</td>
                <td>{m.life}</td>
                <td>
                  <input type="color" value={m.color} disabled={true} />{" "}
                </td>
                <td>{m.mobtype[0]}</td>
                <td>
                  <button
                    onClick={() => handleDelete(m.id)}
                    className="btnForm-style"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <button
                    className="btnForm-style"
                    onClick={() => handleShowModalEdit(m)}
                  >
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <div className="noMobs">
              <b> No allies!</b>
            </div>
          )}
        </tbody>
      </Table>
      <div>
        <FormMob
          models={models}
          editing={editing}
          mobToEdit={mobToEdit}
          id={idM}
          showModal={showModal}
          handleCloseModal={handleCloseModal}
        />
      </div>

      <div className="scale-in-ver-bottom code-generator-main">
        <button onClick={handleShowModal} className="code-generator">
          <p>agregar Mob</p>
          <FontAwesomeIcon icon={faCode} />
        </button>
      </div>
      {/* <div className="scale-in-ver-bottom code-generator-main">
        <Link className="code-generator" to={`/form`}>
          <p>Add Mob</p>
          <FontAwesomeIcon icon={faCode} />
        </Link>
      </div> */}
    </div>
  );
}
