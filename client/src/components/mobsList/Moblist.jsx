import React, { useState } from "react";
import "./MobList.css";

import Table from "react-bootstrap/Table";
import {Button, Modal, Form } from 'react-bootstrap'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faCode,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { deleteMob, editMob } from "../../redux/actions";

import Swal from "sweetalert2";
import FormMob from "../form/FormMob";

export default function MobList({ mobs }) {
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(false)

  const handleCloseModal = () => setShowModal(false);
  const handleShowModalEdit = () =>{
    setShowModal(true);
    setEditing(true)
  } 
  const handleShowModal = () => {
    setShowModal(true)
    setEditing(false)
  };

  const dispatch = useDispatch();
  const allyArr = mobs.filter((m) => m.team !== "boss");
  const bossArr = mobs.filter((m) => m.team !== "ally");

  const mobsOrder = bossArr.concat(allyArr);

  console.log("MOBSORDER : ", mobsOrder);
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
            mobsOrder.map((m) => (
              <tr className="table-row" key={m.id}>
                <td>{1}</td>
                <td>{m.name}</td>
                <td>{m.team}</td>
                <td>{m.life}</td>
                <td>{m.color}</td>
                <td>{m.mobtype}</td>
                <td>
                  <button
                    onClick={() => handleDelete(m.id)}
                    className="btnForm-style"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <button className="btnForm-style"  onClick={handleShowModalEdit}>

                    <FontAwesomeIcon icon={faPenToSquare} />
                  </button>
                  
                </td>
              </tr>
            ))
          ) : (
            <div className="noMobs">
              <b> NO MOBS !</b>
            </div>
          )}
        </tbody>
      </Table>
      <div>
       <FormMob editing={editing} showModal={showModal}  handleCloseModal={handleCloseModal}/>
      </div>
      

      <div className="scale-in-ver-bottom code-generator-main">
      <button onClick={handleShowModal}  className="code-generator" >
           <p>Abrir form</p>
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
