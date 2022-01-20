import React from "react";
import { Button, MenuItem } from "@mui/material";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

export default function TicketItemFormBtn3({ renderCondition }) {
  const navigate = useNavigate();
  const btnTxt = renderCondition == "new" ? "Cancel" : "Delete";
  const goBack = () => navigate(-1);
  return (
    <StyledButton
      variant="contained"
      color="secondary"
      onClick={
        renderCondition == "new" 
        ? goBack 
        : console.log("Сделать удаление")
      }
    >
      {btnTxt}
    </StyledButton>
  );
}

const StyledButton = styled(Button)`
  position: absolute;
  left: 612px;
  top: 269px;

  height: 40px;
  width: 124px;
  /* margin-top: 30px; */
  text-transform: none;
  background-color: #eb6e6e;
  font-weight: 600;
  font-size: 14px;
`;
