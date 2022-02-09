import React, { useState } from "react";
import styled from "@emotion/styled";
import { drawerWidth } from "./SideBar";
import Popper from "@mui/material/Popper";
import { Button } from "@mui/material";

export default function TicketItemFormPopup({ anchorEl }) {
  //const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const id = open ? "delete-popup" : undefined;

  return (
    // <DivCont>
    <StyledPopper
      id={id}
      placement="top"
      disablePortal={true}
      open={open}
      anchorEl={anchorEl}
      modifiers={[
        {
          name: "flip",
          enabled: true,
          options: {
            altBoundary: true,
            rootBoundary: "document",
            padding: 8,
          },
        },
        {
          name: "preventOverflow",
          enabled: true,
          options: {
            altAxis: true,
            altBoundary: true,
            tether: true,
            rootBoundary: "document",
            padding: 8,
          },
        },
        {
          name: "arrow",
          enabled: false,
        },
      ]}
    >
      Удалить эту заявку?
      <StyledButton
        variant="contained"
      // onClick={
      // }
      >
        Удалить
      </StyledButton>{" "}
      <StyledButton
        variant="contained"
      // onClick={
      // }
      >
        Отменить
      </StyledButton>
    </StyledPopper>

    // <Popup>тут какой-то текст</Popup>
    // </DivCont>
  );
}
const DivCont = styled.div`
  position: fixed;
  top: 0;
  left: ${drawerWidth}px;
  width: 100vw;
  height: 100vh;
  border: 1pz red solid;
  //background: rgba(0.5, 0.5, 0.5, 0.4);
  display: flex;
`;

// const Popup = styled.div`
//   color: black;
//   position: relative;
//   width: 1002px;
//   top: 153px;
//   height: 322px;
//   margin-left: 90px;
//   background: white;
//   border-radius: 8px;
// `;
const StyledPopper = styled(Popper)`
  border: 1px solid red;
  width: 600px;
  height: 300px;
  position: fixed;
  top: 200px;

  /* border-radius: 8px; */
  background: #;
`;
const StyledButton = styled(Button)`
  /* position: absolute;
  left: 612px;
  top: 269px; */
  height: 40px;
  width: 124px;
  text-transform: none;
  background-color: #eb6e6e;
  font-weight: 600;
  font-size: 14px;
  &:hover {
    background-color: #994748;
  }
`;
