import React, { useState } from "react";
import { Button, MenuItem } from "@mui/material";
import TicketItemFormPopup from "./TicketItemFormPopup";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { deleteTicket } from "../firebaseApp";
import toast from "react-hot-toast";

export default function TicketItemFormBtn3({ renderCondition, ...props }) {
  const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = React.useState(null);
 
  const btnTxt = renderCondition == "new" ? "Cancel" : "Delete";
  const goBack = () => navigate(-1);

  const handleClickDelete = event => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    //console.log(anchorEl);
  };

  /*const onDeleteHandler = async data => {
    const loadingToast = toast.loading("Удаление тикета...");
    try {
      // throw new Error();
      await deleteTicket(renderCondition);
    } catch {
      setTimeout(() => toast.remove(loadingToast), 1000);
      toast.error("Ошибка удаления");
      return;
    }
    toast.remove(loadingToast);
    toast.success("Удаление тикета успешно завершено");
    reset();
  };
*/
  return (
    <>
      <StyledButton
        disabled={props.disabled ? props.disabled : false}
        variant="contained"
        onClick={
          renderCondition == "new"
            ? goBack
            : handleClickDelete /*onDeleteHandler*/
        }
      >
        {btnTxt}
      </StyledButton>
      {renderCondition != "new" ? (
        <TicketItemFormPopup anchorEl={anchorEl} />
      ) : null}
    </>
  );
}

const StyledButton = styled(Button)`
  position: absolute;
  left: 612px;
  top: 269px;
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
