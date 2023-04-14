import React from "react";
import { Button }  from '@mui/material'
import { useDispatch } from "react-redux";
import { deleteOpTickets } from "../../redux/actions";

export default function OpTicketCard({ id, name, client, detail }) {

    const dispatch = useDispatch();

    function deleteTicket(id) {
        dispatch(deleteOpTickets(id));
      }

  return (
    <div>
        <h3>
          ID TICKET: {id}
        </h3>
        <h3>
          Operador que lo envio: {name}
        </h3>
      <h4>Cliente a referenciar: {client}</h4>
      <h4>Detalle: {detail}</h4>
      <Button 
            onClick={() => {
                deleteTicket(id)
            }}
            variant="outlined" 
            color="primary" 
            >
            Marcar como resuelto
            </Button>
    </div>
  );
}
