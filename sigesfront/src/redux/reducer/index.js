import {
  GET_ALL_OPTICKETS
} from "../actions"; 
 
 const initialState = {
    optickets: [],
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

      default:
      return state;
      
    }
  };
  
  export default rootReducer;
  