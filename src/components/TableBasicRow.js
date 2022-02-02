import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import styled from "@emotion/styled";
import formatAMPM from "../utils/formatAMPM";
import Avatar from "@mui/material/Avatar";
import { month } from "../utils/monts";

//TODO "updated ... day ago"
export default function TableBasicRow({ ticket }) {
  let priority;
  switch (ticket.priority) {
    case "high":
      priority = (
        <PriorityColorHigh>
          <StyledPriority>{ticket.priority}</StyledPriority>
        </PriorityColorHigh>
      );
      break;
    case "normal":
      priority = (
        <PriorityColorNormal>
          <StyledPriority>{ticket.priority}</StyledPriority>
        </PriorityColorNormal>
      );
      break;
    case "low":
      priority = (
        <PriorityColorLow>
          <StyledPriority>{ticket.priority}</StyledPriority>
        </PriorityColorLow>
      );
      break;
  }

  const date = new Date(ticket.date);
  const render = (
    <StyledTableRow>
      <StyledTableCellTickDet>
        <StyledAvatar
          src={ticket.user.userAvatar}
          sx={{ width: 44, height: 44 }}
        />
        {ticket.title}
      </StyledTableCellTickDet>
      <TableCell>{ticket.user.userName}</TableCell>
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

const StyledTableCellTickDet = styled(TableCell)`
  display: flex;
  align-items: center;
`;

const StyledAvatar = styled(Avatar)`
  margin-left: 16px;
  margin-right: 24px;
`;
