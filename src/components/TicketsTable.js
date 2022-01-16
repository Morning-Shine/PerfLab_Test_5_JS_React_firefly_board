import React from "react";
import styled from "@emotion/styled";
import NewTicketBtn from "./NewTicketBtn";


export default function TicketsTable() {
  return (
    <DivCont>
      <P>All tickets</P>
      <NewTicketBtn/>
    </DivCont>
  );
}

const DivCont = styled.div`
  border: 1px solid red;
  height: calc(100vh - 158px);
  position: relative;
  top: 0;
  display: grid;
  grid-template-columns: 1fr;
  margin: 44px 33px 30px 30px;
`;

const P = styled.p`
  height: 24px;
  padding-left: 32px;
  padding-top: 32px;
  font-family: Mulish;
  font-weight: bold;
`;
