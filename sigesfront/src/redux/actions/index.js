import axios from "axios";

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