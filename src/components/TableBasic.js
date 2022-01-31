import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import styled from "@emotion/styled";
import TableBasicRow from "./TableBasicRow";

export default function TableBasic() {
  const tickets = useSelector(state => state.firebaseData.tickets);

  return (
    <StyledTableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledHeaderCell>Ticket details</StyledHeaderCell>
            <StyledHeaderCell align="left">Owner name</StyledHeaderCell>
            <StyledHeaderCell align="left">Date</StyledHeaderCell>
            <StyledHeaderCell align="left">Priority</StyledHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tickets
            ? tickets.map(ticket => (
                <TableBasicRow key={ticket[0]} ticket={ticket} />
              ))
            : null}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
}

const StyledTableContainer = styled(TableContainer)`
  /* border: red solid 1px; */
`;

const StyledHeaderCell = styled(TableCell)`
  color: #9fa2b4;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.2px;
`;
