import React from "react";
import { Button } from "@mui/material";
import styled from "@emotion/styled";

export default function TicketItemFormBtn2({ renderCondition }) {
  if (renderCondition == "newTask") {
    return null;
  }
  return (
    <Div>
      <StyledButton variant="contained" color="warning">
        Complete
      </StyledButton>
    </Div>
  );
}

const StyledButton = styled(Button)`
  height: 40px;
  width: 124px;
  margin-left: 188px;
  margin-top: 30px;
  text-transform: none;
  background-color: #f2cf42;
  font-weight: 600;
  font-size: 14px;
`;

const Div = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 4;
  grid-row-end: 5;
`;
