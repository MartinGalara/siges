import React from "react";
import { Button }  from '@mui/material'
import { Link } from "react-router-dom";

export default function ComputerCard({ id, alias, teamviewer_id, client }) {

  return (
    <div>
        <h3>
          Cliente: {client}
        </h3>
        <h3>
          Alias: {alias}
        </h3>
        <h3>
          TeamViewer ID: {teamviewer_id}
        </h3>
        <Link to={`/admin/computers/${id}`}>
            <Button 
            variant="outlined" 
            color="primary" 
            >
            Editar
            </Button>
        </Link>
    </div>
  );
}
