import axios from "axios";
import swal from "sweetalert";
import Swal from "sweetalert2";
export const actionTypes = {
  GET_MOBS: "GET_MOBS",
  CREATE_MOB: "CREATE_MOB",
  DELETE_MOB: "DELETE_MOB",
  GET_MOB_BY_ID: "GET_MOB_BY_ID",
  GET_MODELS: "GET_MODELS",
};

export function getMobs() {
  return async function (dispatch) {
    const json = await axios.get("http://localhost:4000/mobs");

    // console.log("entramos al getMobs(), retorna:  ", json.data);

    return dispatch({
      type: actionTypes.GET_MOBS,
      payload: json.data,
    });
  };
}
export function getModels() {
  return async function (dispatch) {
    const json = await axios.get("http://localhost:4000/models");

    return dispatch({
      type: actionTypes.GET_MODELS,
      payload: json.data,
    });
  };
}
export function getMobInfo(id) {
  return async function (dispatch) {
    const json = await axios.get(`http://localhost:4000/mobs/${id}`);

    console.log("entramos al getMobInfo(), retorna:  ", json.data);

    return dispatch({
      type: actionTypes.GET_MOB_BY_ID,
      payload: json.data,
    });
  };
}

export function createMob(payload) {
  return async function (dispatch) {
    try {
      const newMob = await axios.post(
        `http://localhost:4000/createMob`,
        payload
      );
      console.log("Entramos al CreateMob() : retorna, ", newMob);
      Swal.fire({
        position: "bottom-end",
        icon: "success",
        text: "Done!",
        footer: "Mob created succesfully!",
        showConfirmButton: false,
        timer: 1200,
        width: "15em",
        fon: "#fff",
        iconColor: "#4e5ca9c9",
        background: "rgba(0,0,0,1)",
      });
      return dispatch({
        type: actionTypes.CREATE_MOB,
        payload: newMob.data,
      });
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Error!",
        iconColor: "#4e5ca9c9",
        text: "Missing data ",
      });

      console.log(error);
      throw new Error(error);
    }
  };
}
export function deleteMob(id) {
  return async function () {
    try {
      await axios.delete(`http://localhost:4000/deleteMob/${id}`);

      return {
        type: actionTypes.DELETE_MOB,
        payload: id,
      };
    } catch (error) {
      throw new Error(error);
    }
  };
}
export function editMob(id, payload) {
  return async function () {
    try {
      const edited = await axios.put(
        `http://localhost:4000/editMob/${id}`,
        payload
      );
      console.log("ENTRAMOS AL EDITMOB(), ", edited);
      Swal.fire({
        position: "bottom-end",
        icon: "success",
        text: "Done!",
        footer: "Mob edited succesfully!",
        showConfirmButton: false,
        timer: 1200,
        width: "15em",
        fon: "#fff",
        iconColor: "#4e5ca9c9",
        background: "rgba(0,0,0,1)",
      });
      return edited;
    } catch (error) {
      console.log(error);
      swal("Data mistakes!", "Check mobs data", "error");
      throw new Error(error);
    }
  };
}
