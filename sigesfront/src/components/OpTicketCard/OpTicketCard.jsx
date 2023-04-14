import React from "react";

export default function OpTicketCard({ id, name, client, detail }) {
  return (
    <div>
        <h3>
          {id}
        </h3>
        <h3>
          {name}
        </h3>
      <h4>Cliente: {client}</h4>
      <h4>Detalle: {detail}</h4>
    </div>
  );
}
