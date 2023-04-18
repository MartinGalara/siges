import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComputer } from "../../redux/actions";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory} from "react-router-dom";
import { clearDetail } from "../../redux/actions";

export default function ComputerDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const computer = useSelector((state) => state.ComputerDetail);
  const history = useHistory();

  useEffect(() => {
    dispatch(getComputer(id));
  },[dispatch,id]);

  function handleBack() {
    dispatch(clearDetail())
    history.push("/home")
  }

  if(Object.entries(computer).length !== 0){
  return (
    <div>
        <h3>{computer.id}</h3>
    </div>
  );}
}
