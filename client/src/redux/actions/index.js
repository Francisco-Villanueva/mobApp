import axios from "axios";

export const actionTypes = {
  GET_MOBS: "GET_MOBS",
};

export function getMobs() {
  return async function (dispatch) {
    const json = await axios.get("http://localhost:4000/mobs");

    console.log("entramos al getMobs(), retorna:  ", json.data);

    return dispatch({
      type: actionTypes.GET_MOBS,
      payload: json.data,
    });
  };
}
