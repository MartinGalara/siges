import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllOpTickets
} from "../../redux/actions";

import OpTicketCard from "../OpTicketCard/OpTicketCard";

export default function AdminDashboard() {

    const dispatch = useDispatch();
    const allOpTickets = useSelector((state) => state.optickets);

    useEffect(() => {
        if (allOpTickets.length === 0) {
        dispatch(getAllOpTickets());
      }
      }, [dispatch,allOpTickets]);

  return (
    <div>
      <h1>este es el admindashboard</h1>
      {allOpTickets?.map((el) => {
        return (
          <OpTicketCard
            key={el.id}
            name={el.name}
            client={el.client}
            detail={el.detail}
            id={el.id}
          />
        );
      })}
    </div>
  );
}
