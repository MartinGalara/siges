import axios from "axios";

export function createTicket(arg) {
    return async function () {
      try {
        console.log(arg)
        /* await axios.post("http://localhost:3001/videogames", { 
          name: arg.name,
          client: arg.client,
          detail: arg.detail,
          }); */
          alert("Ticket creado");
      } catch (error) {
        alert(error.response.data)
      }
    };
  }