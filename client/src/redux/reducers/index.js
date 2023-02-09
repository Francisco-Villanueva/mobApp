import { actionTypes } from "../actions";
const initialState = {
  allMobs: [],
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_MOBS:
      return {
        ...state,
        allMobs: action.payload,
      };
      case actionTypes.CREATE_MOB:
        state.allMobs.push(action.payload)
        return{
          ...state
        }
    default:
      return state;
  }
};

export default rootReducer;
