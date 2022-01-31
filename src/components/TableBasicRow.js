import React from "react";
import { useSelector } from "react-redux";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import styled from "@emotion/styled";
import formatAMPM from "../utils/formatAMPM";
import { month } from "../utils/monts";

export default function TableBasicRow({ ticket }) {
  let priority;
  switch (ticket[1].priority) {
    case "high":
      priority = (
        <PriorityColorHigh>
          <StyledPriority>{ticket[1].priority}</StyledPriority>
        </PriorityColorHigh>
      );
      break;
    case "normal":
      priority = (
        <PriorityColorNormal>
          <StyledPriority>{ticket[1].priority}</StyledPriority>
        </PriorityColorNormal>
      );
      break;
    case "low":
      priority = (
        <PriorityColorLow>
          <StyledPriority>{ticket[1].priority}</StyledPriority>
        </PriorityColorLow>
      );
      break;
  }

  const date = new Date(ticket[1].date);
  const render = (
    <StyledTableRow>
      <TableCell>{ticket[1].title}</TableCell>
      <TableCell>{ticket[1].user.userName}</TableCell>
      <TableCell>
        <StyledDate>
          {" "}
          {`${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`}
        </StyledDate>
        <StyledTime>{formatAMPM(date)}</StyledTime>
      </TableCell>
      <TableCell>{priority}</TableCell>
    </StyledTableRow>
  );

  return render;
}

const StyledTableRow = styled(TableRow)`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
`;

const StyledPriority = styled.div`
  display: inline;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: bold;
  font-style: normal;
  font-size: 14px;
  line-height: 24px;
  height: 24px;
  color: #ffffff;
`;

const PriorityColorHigh = styled.div`
  background-color: #eb6e6e;
  display: inline;
  padding: 5px 12px;
  border-radius: 100px;
  height: 24px;
`;
const PriorityColorNormal = styled.div`
  background-color: #50c786;
  display: inline;
  padding: 5px 12px;
  border-radius: 100px;
  height: 24px;
`;
const PriorityColorLow = styled.div`
  background-color: #f2cf42;
  display: inline;
  padding: 5px 12px;
  border-radius: 100px;
  height: 24px;
`;

const StyledDate = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
`;
const StyledTime = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: #c5c7cd;
`;
