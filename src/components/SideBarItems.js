import React from "react";
import ListItem from "@mui/material/ListItem";
import Tooltip from "@mui/material/Tooltip";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListAltIcon from "@mui/icons-material/ListAlt";
import Typography from "@mui/material/Typography";
import BarChartIcon from "@mui/icons-material/BarChart";
import { privateRoutes } from "../views/routs";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

export default function SideBarItems({ screenWidth }) {
  const menuItems = [
    {
      text: "Dashboard",
      icon: <BarChartIcon />,
      routing: undefined,
      isActivePath: undefined,
    },
    {
      text: "Tickets",
      icon: <ListAltIcon />,
      routing: undefined,
      isActivePath: undefined,
    },
  ];

  menuItems.forEach(
    (item) =>
      (item.routing = privateRoutes.find(
        (route) => route.path.slice(1).toLowerCase() == item.text.toLowerCase()
      )?.path)
  );

  menuItems.forEach(
    (item) => (item.isActivePath = item.routing == window.location.pathname)
  );

  return (
    <List>
      {screenWidth > 1280
        ? menuItems.map((li) => (
            <Link to={li.routing} key={li.routing}>
              <ListItem
                button
                key={li.text}
                sx={{ height: "56px" }}
                disabled={li.isActivePath}
              >
                <ListItemIcon
                  sx={{
                    color: "#DDE2FF",
                  }}
                >
                  {li.icon}
                </ListItemIcon>
                <Typography
                  sx={{
                    color: "#DDE2FF",
                  }}
                >
                  {li.text}
                </Typography>
              </ListItem>
            </Link>
          ))
        : menuItems.map((li) => (
            <Link to={li.routing} key={li.routing}>
              <Tooltip title={li.text} placement="right">
                <ListItem
                  button
                  key={li.text}
                  sx={{ height: "56px" }}
                  disabled={li.isActivePath}
                >
                  <StyledListItemIcon
                    sx={{
                      color: "#DDE2FF",
                    }}
                  >
                    {li.icon}
                  </StyledListItemIcon>
                </ListItem>
              </Tooltip>
            </Link>
          ))}
    </List>
  );
}

const StyledListItemIcon = styled(ListItemIcon)`
  min-width: 24px;
`;
