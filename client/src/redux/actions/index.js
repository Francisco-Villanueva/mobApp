import axios from "axios";
import swal from "sweetalert";
export const actionTypes = {
  GET_MOBS: "GET_MOBS",
  CREATE_MOB: "CREATE_MOB",
  DELETE_MOB: "DELETE_MOB",
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

export function createMob(payload) {
  return async function (dispatch) {
    try {
      const newMob = await axios.post(
        `http://localhost:4000/createMob`,
        payload
      );
      console.log("Entramos al CreateMob() : retorna, ", newMob);
      swal("Mob created!", "You create a mob succesfully!", "success");
      return dispatch({
        type: actionTypes.CREATE_MOB,
        payload: newMob.data,
      });
    } catch (error) {
      swal("Data mistakes!", "Check mobs data", "error");
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

      return edited;
    } catch (error) {
      throw new Error(error);
    }
  };
}
