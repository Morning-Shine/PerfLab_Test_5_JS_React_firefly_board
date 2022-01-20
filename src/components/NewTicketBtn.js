import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { CURRENT_TASK } from "../utils/constants";

export default function NewTicketBtn() {
  return (
    <nav>
      <Link to={`/tickets/new`}>
        <StyledButton
          variant="contained"
        >
          New Ticket
        </StyledButton>
      </Link>
    </nav>
  );
}

const StyledButton = styled(Button)`
  text-transform: none;
  height: 40px;
  width: 117px;
  font-size: 14px;
  font-weight: 600;
  font-family: Mulish;
  line-height: 24px;
  position: absolute;
  top: 27px;
  left: 146px;
`;
