import React from "react";
import "./MobList.css";

import Table from "react-bootstrap/Table";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCode } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { deleteMob } from "../../redux/actions";
import { Link } from "react-router-dom";

import swal from "sweetalert";
export default function MobList({ mobs }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Mob!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteMob(id));
        swal(" Your Mob has been deleted!", {
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
            mobs.map((m) => (
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

      <div className="scale-in-ver-bottom code-generator-main">
        <Link className="code-generator" to={`/mobcode`}>
          <p>Generate Code</p>
          <FontAwesomeIcon icon={faCode} />
        </Link>
      </div>
    </div>
  );
}
