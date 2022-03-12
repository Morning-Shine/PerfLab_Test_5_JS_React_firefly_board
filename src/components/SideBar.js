import React, { useState, useEffect } from "react";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import logo from "../assets/img/logo.png";
import { Paper } from "@mui/material";
import SideBarItems from "./SideBarItems";
import styled from "@emotion/styled";


export const drawerWidthWide = 255;
export const drawerWidthNarrow = 60;

export default function SideBar() {
  const [screenWidth, setScreenWidth] = useState(
    document.documentElement.clientWidth
  );
  useEffect(() => {
    const changeScreenWidth = () =>
      setScreenWidth(document.documentElement.clientWidth);
    window.addEventListener("resize", changeScreenWidth);
    return () => window.removeEventListener("resize", changeScreenWidth);
  });
  let companyInfo;
  screenWidth > 1280
    ? (companyInfo = (
        <StyledWideToolbar>
          <Avatar
            alt="logo"
            src={logo}
            sx={{ width: 40, height: 40, marginLeft: "8px" }}
          />
          <Typography
            sx={{
              fontSize: 19,
              paddingLeft: "12px",
              color: "#DDE2FF",
            }}
          >
            Dashboard Kit
          </Typography>
        </StyledWideToolbar>
      ))
    : (companyInfo = (
        <StyledNarrowToolbar>
          <Tooltip title="Dashboard Kit" placement="right">
            <Div>
              <Avatar alt="logo" src={logo} sx={{ width: 40, height: 40 }} />
            </Div>
          </Tooltip>
        </StyledNarrowToolbar>
      ));
  return (
    <Container>
      <Paper
        style={{ height: "100vh", background: "#363740" }}
        elevation={0}
        sx={{ borderRadius: 0 }}
      >
        {companyInfo}
        <SideBarItems screenWidth={screenWidth} />
      </Paper>
    </Container>
  );
}

const Container = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
`;
const Div = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledWideToolbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 37px 0 51px 32px;
`;

const StyledNarrowToolbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 37px 0 31px;
`;
