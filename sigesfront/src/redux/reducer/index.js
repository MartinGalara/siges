import {
  GET_ALL_OPTICKETS,
  DELETE_OPTICKETS,
  GET_ALL_COMPUTERS
} from "../actions"; 
 
 const initialState = {
    optickets: [],
    computers: []
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {

      case GET_ALL_OPTICKETS:
      const auxiliar = [];
      action.payload.map(el => auxiliar.push(el))
      return {
        ...state,
        optickets: auxiliar,
      };

      case DELETE_OPTICKETS:
      return {
        ...state,
        optickets: state.optickets.filter((el) => el.id !== action.payload),
      };

      case GET_ALL_COMPUTERS:
      const aux = [];
      action.payload.map(el => aux.push(el))
      return {
        ...state,
        computers: aux,
      };

      default:
      return state;
      
    }
  };
  
  export default rootReducer;
  