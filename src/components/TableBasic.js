import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import styled from "@emotion/styled";
import TableBasicRow from "./TableBasicRow";
import { getDatabase, ref, onValue } from "firebase/database";


export default function TableBasic() {
  // const [tickets, setTickets] = useState([]);
   let tickets = useSelector(state => state.firebaseData.tickets);
  //console.log(tickets);

  // useEffect(() => {
  //   onValue(ref(db, "tickets"), snapshot => {
  //     setTickets(Object.entries(snapshot.val()));
  //     // console.log("data from useEffect", data);
  //   });
  // }, [tickets]);

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
                <TableBasicRow key={ticket.taskId} ticket={ticket} />
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
