import axios from "axios";
export const GET_ALL_OPTICKETS = "GET_ALL_OPTICKETS";
export const DELETE_OPTICKETS = "DELETE_OPTICKETS";
export const GET_ALL_COMPUTERS = "GET_ALL_COMPUTERS";

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

  export function deleteOpTickets(id) {
    return async function (dispatch) {
      await axios.delete(`https://siges-production.up.railway.app/optickets?id=${id}`);
      return dispatch({
        type: DELETE_OPTICKETS,
        payload: id,
      });
    };
  }

  export function getAllComputers() {
    return async function (dispatch) {
      var allComputers = await axios.get(`https://siges-production.up.railway.app/computers`);
      return dispatch({
        type: GET_ALL_COMPUTERS,
        payload: allComputers.data,
      });
    };
  }