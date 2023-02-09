import axios from "axios";

export const actionTypes = {
  GET_MOBS: "GET_MOBS",
  CREATE_MOB: 'CREATE_MOB'
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

export function createMob (payload){
  return async function (dispatch){
    try {

      const newMob = await axios.post(`http://localhost:4000/createMob`, payload)
      console.log('Entramos al CreateMob() : retorna, ',  newMob)

      return dispatch({
        type: actionTypes.CREATE_MOB,
        payload: newMob.data
      })
    } catch (error) {
      throw new Error(error)
    }
  }
}