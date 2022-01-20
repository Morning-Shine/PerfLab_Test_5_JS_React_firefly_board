import React from "react";
import ToggleChangeTheme from "./ToggleChangeTheme";
import { useSelector } from "react-redux";
import UserInfo from "./UserInfo";
import styled from "@emotion/styled";


export default function ControlPanel() {
  const userData = useSelector(state => state.user);
  
  let render;
  userData.id
    ? (render = (
        <>
          <ToggleChangeTheme />
          <UserInfo user={userData} />
        </>
      ))
    : (render = <ToggleChangeTheme />);

  return <Div>{render}</Div>;
}

const Div = styled.div`
  // border: 1px solid red;

  position: absolute;
  right: 33px;
  top: 0;
  margin-top: 30px;
  width: 300px;
  height: 50px;
  display: flex;
  align-items: center;
  display: grid;
  grid-template-columns: 100px 1fr;
  text-align: end;
`;