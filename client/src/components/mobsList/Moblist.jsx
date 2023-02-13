import React from "react";
import "./MobList.css";

import Table from 'react-bootstrap/Table';

import{FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{faTrash, faCode}from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from "react-redux";
import { deleteMob } from "../../redux/actions";
import {Link} from 'react-router-dom'
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
          <td >
            <button onClick={()=>dispatch(deleteMob(m.id))} className="btnForm-style">
              <FontAwesomeIcon icon={faTrash} />
            </button>
            
          </td>
        </tr>))}

         
        
      </tbody>
    </Table>

    <div className="code-generator-main" >

    <Link className="code-generator" to={`/mobcode`}>
          <p>Generate Code</p>
          <FontAwesomeIcon icon={faCode} />
    </Link>
    </div>
  </div>;
}
