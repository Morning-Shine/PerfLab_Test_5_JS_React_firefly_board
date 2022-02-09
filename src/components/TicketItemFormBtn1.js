import React from "react";
import Button from "@mui/material/Button";
import { Controller } from "react-hook-form";
import styled from "@emotion/styled";

export default function TicketItemFormBtn1({ isValid, text }) {
  return (
    <StyledButton variant="contained" type="submit" disabled={!isValid}>
      {text}
    </StyledButton>
  );
}

const StyledButton = styled(Button)`
  position: absolute;
  top: 269px;
  left: 32px;
  height: 40px;
  width: 124px;
  text-transform: none;
  background-color: #50c786;
  font-weight: 600;
  font-size: 14px;
  color: black;
  &:hover {
    background-color: #3c845a;
  }
`;
