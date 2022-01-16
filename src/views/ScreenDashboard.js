import React from "react";
import ControlPanel from "../components/ControlPanel";
import SideBar, { drawerWidth } from "../components/SideBar";
import PageName from "../components/PageName";
import styled from "@emotion/styled";


export default function ScreenDashboard() {
  return (
    <DivCont>
      <SideBar />
      <Div>
        <ControlPanel />
        <PageName name={"Dashboard"} />
      </Div>
    </DivCont>
  );
}

const DivCont = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: ${drawerWidth}px auto;
`;

const Div = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
`;
