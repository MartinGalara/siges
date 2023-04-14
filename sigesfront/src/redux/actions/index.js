import axios from "axios";
export const GET_ALL_OPTICKETS = "GET_ALL_OPTICKETS";

export function createTicket(arg) {
    return async function () {
      try {
         await axios.post("https://siges-production.up.railway.app/optickets", { 
          name: arg.name,
          client: arg.client,
          detail: arg.detail,
          }); 
          alert("Ticket creado");
      } catch (error) {
        alert(error.response.data)
      }
    };
  }

  export function getAllOpTickets() {
    return async function (dispatch) {
      var allOpTickets = await axios.get(`https://siges-production.up.railway.app/optickets`);
      return dispatch({
        type: GET_ALL_OPTICKETS,
        payload: allOpTickets.data,
      });
    };
  }