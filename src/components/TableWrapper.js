import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import TableBasic from "./TableBasic";
import { useSelector, useDispatch } from "react-redux";
import { fetchTickets } from "../async/fetchTickets";



//TODO сколько получаем? Зависит от отображения?

export default function TableWrapper() {
  const [tickets, setTickets] = useState([]);//onSnapshot

  const viewProp = useSelector(state => state.tableView.currentView);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchTickets(setTickets, 8);//onSnapshot
    //dispatch(fetchTickets({ startAt: 1, limit: 8 }));//через get с limit()
  });

  let render;
  viewProp == "table"
    ? (render = <TableBasic tickets={tickets} />) //onSnapshot
    : (render = <DivCont>Карточки задач</DivCont>);
  return render;
}

const DivCont = styled.div`
  /* border: 1px solid red; */
  //width: 100px;
  /* grid-row-start: 2;
  grid-row-end: 3; */
  margin-bottom: 10px;
`;
