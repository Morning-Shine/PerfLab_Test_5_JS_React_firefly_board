import React, { useState } from "react";
import styled from "@emotion/styled";
import { drawerWidth } from "./SideBar";
import { Button } from "@mui/material";

export default function TicketItemFormPopup({
  visible,
  changePopupVisible,
  onDeleteHandler,
}) {
  // console.log("visible", visible);
  return visible ? (
    <DivCont>
      <Popup>
        <P>Удалить эту заявку?</P>
        <BtnCont>
          <StyledButton1 variant="contained" onClick={onDeleteHandler}>
            Удалить
          </StyledButton1>{" "}
          <StyledButton2 variant="contained" onClick={changePopupVisible}>
            Отменить
          </StyledButton2>
        </BtnCont>
      </Popup>
    </DivCont>
  ) : null;
}
const DivCont = styled.div`
  /* border: 1px red solid; */
  position: fixed;
  top: 0;
  left: ${drawerWidth}px;
  width: 100vw;
  height: 100vh;
  background: rgba(0.5, 0.5, 0.5, 0.4);
  display: flex;
`;

const Popup = styled.div`
  color: black;
  position: relative;
  width: 602px;
  top: 178px;
  height: 272px;
  margin-left: 290px;
  /* background: rgba(221, 226, 225,1); */
  background: #363740;
  //border-radius: 8px;
`;

const BtnCont = styled.div`
  //border: 1px solid red;
  justify-content: space-around;
  display: flex;
`;
const StyledButton1 = styled(Button)`
  /* position: absolute;
  left: 612px;
  top: 269px; */
  height: 40px;
  width: 124px;
  text-transform: none;
  background-color: #994748;
  font-weight: 600;
  font-size: 14px;
  color: #dde2ff;
  &:hover {
    background-color: #eb6e6e;
  }
`;

const StyledButton2 = styled(Button)`
  /* position: absolute;
  left: 612px;
  top: 269px; */
  height: 40px;
  width: 124px;
  text-transform: none;
  background-color: #9f8930;
  font-weight: 600;
  font-size: 14px;
  color: #dde2ff;
  &:hover {
    background-color: #f2cf42;
  }
`;

const P = styled.p`
  padding: 60px 0 70px 0;
  font-size: 30px;
  text-align: center;
  color: #dde2ff;
`;
