import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { CURRENT_TASK } from "../utils/constants";

export default function NewTicketBtn() {
  return (
    <nav>
      <Link to={CURRENT_TASK}>
        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            height: "40px",
            width: "117px",
            fontSize: "14px",
            fontWeight: 600,
            fontFamily: "Mulish",
            lineHeight: "24px",
            position: "absolute",
            top: "27px",
            left: "146px",
          }}
        >
          New Ticket
        </Button>
      </Link>
    </nav>
  );
}

function createNewTask() {}
