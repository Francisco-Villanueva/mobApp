import React from 'react'
import './Editform.css'

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import {useParams} from'react-router-dom'
import { useDispatch } from "react-redux";

export default function Editform() {
    const {id}= useParams()
    const dispatch = useDispatch()
  return (
    <div>Editform</div>
  )
}
