import React, { useState } from "react";
import styled from "@emotion/styled";
import TableBasic from "./TableBasic";
import { useSelector } from "react-redux";

import {
  getDatabase,
  ref,
  query,
  get,
  orderByChild,
  child,
  orderByValue,
  limitToLast,
} from "firebase/database";

// //TODO сколько получаем? Зависит от отображения?
const db = getDatabase();

export default function TableWrapper() {
  const viewProp = useSelector(state => state.tableView.currentView);
  let ticketsData;
  get(query(ref(db, "tickets"), orderByValue("taskId/date"), limitToLast(3)))
    .then(snapshot => {
      if (snapshot.exists()) {
        ticketsData = snapshot.val();
      }
    })
    .catch(error => {
      console.error("ошибка получения данных при построении таблицы", error);
    });

  let render;
  viewProp == "table"
    ? (render = <TableBasic ticketsData={ticketsData} />)
    : (render = <DivCont> </DivCont>);
  return render;
}

const DivCont = styled.div`
  /* border: 1px solid red; */
  //width: 100px;
  /* grid-row-start: 2;
  grid-row-end: 3; */
  margin-bottom: 10px;
`;
