import React from "react";
import SideBar, {
  drawerWidthWide,
  drawerWidthNarrow,
} from "../components/SideBar";
import ControlPanel from "../components/ControlPanel";
import styled from "@emotion/styled";
import TicketItemForm from "../components/TicketItemForm";
import { useParams } from "react-router-dom";


export default function ScreenTask() {
  const { taskId } = useParams();

  return (
    <DivCont>
      <SideBar />
      <Div>
        <ControlPanel />
        <TicketItemForm renderCondition={taskId} />
      </Div>
    </DivCont>
  );
}

const DivCont = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: ${drawerWidthWide}px auto;
  @media (max-width: 1280px) {
    grid-template-columns: ${drawerWidthNarrow}px auto;
  }
`;

const Div = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
`;
