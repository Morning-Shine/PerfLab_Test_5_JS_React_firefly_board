import React from "react";
import { Button } from "@mui/material";
import styled from "@emotion/styled";

export default function TicketItemFormBtn2({ renderCondition }) {
  if (renderCondition == "new") {
    return null;
  }
  return (
    <StyledButton variant="contained">
      Complete
    </StyledButton>
  );
}

const StyledButton = styled(Button)`
  position: absolute;
  top: 269px;
  left: 188px;
  height: 40px;
  width: 124px;
  text-transform: none;
  background-color: #f2cf42;
  font-weight: 600;
  font-size: 14px;
  &:hover {
    background-color: #9f8930;
  }
`;
