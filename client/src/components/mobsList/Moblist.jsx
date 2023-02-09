import React from "react";
import "./MobList.css";

import Table from 'react-bootstrap/Table';

import{FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{faTrash}from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from "react-redux";
import { deleteMob } from "../../redux/actions";
export default function MobList({mobs}) {
const dispatch= useDispatch()

  
  return <div>

  <Table striped bordered hover variant="dark">
      <thead>
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
        {mobs?.map(m=>(
        <tr key={m.id}>
          <td>{1}</td>
          <td>{m.name}</td>
          <td>{m.team}</td>
          <td>{m.life}</td>
          <td>{m.color}</td>
          <td>{m.mobtype}</td>
          <td>
            <button onClick={()=>dispatch(deleteMob(m.id))} className="btnForm-style">
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </td>
        </tr>))}

         {/* <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr> */}
        
      </tbody>
    </Table>
  </div>;
}
