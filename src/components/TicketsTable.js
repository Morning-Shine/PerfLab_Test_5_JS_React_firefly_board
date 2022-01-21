import React from "react";
import styled from "@emotion/styled";
import NewTicketBtn from "./NewTicketBtn";
import TableWrapper from "./TableWrapper";

export default function TicketsTable() {
  return (
    <DivCont>
      <>
        <P>All tickets</P>
        <NewTicketBtn />
      </>
      <TableWrapper />
    </DivCont>
  );
}

const DivCont = styled.div`
  border: 1px solid #dfe0eb;
  box-sizing: border-box;
  border-radius: 8px;
  height: calc(100vh - 158px);
  position: relative;
  top: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 70px 1fr; 
  margin: 44px 33px 30px 30px;
`;

const P = styled.p`
  /* border: 1px solid red; */
  grid-row-start: 1;
  grid-row-end: 2;
  height: 24px;
  padding-left: 32px;
  padding-top: 32px;
  font-family: Mulish;
  font-weight: bold;
`;
