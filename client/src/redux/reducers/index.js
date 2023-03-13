import { actionTypes } from "../actions";
const initialState = {
  allMobs: [],
  mobToEdit:[]
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_MOBS:
      return {
        ...state,
        allMobs: action.payload,
      }

      case actionTypes.GET_MOB_BY_ID:
        return{
          mobToEdit: action.payload
      }

      case actionTypes.CREATE_MOB:
        state.allMobs.push(action.payload)
        return{
          ...state
      }

      case actionTypes.DELETE_MOB:
          return {
            ...state,
            allMobs: initialState.allMobs.filter(
              (m) => m.id != action.payload
            ),
          };
    default:
      return state;
  }
};

export default rootReducer;
