import React, { useEffect } from "react";
import styled from "@emotion/styled";
import DashboardCard from "./DashboardCard";
import { useSelector } from "react-redux";


export default function DashboardTotalUncompleted() {
  const totalData = useSelector(
    state => state.firebaseData.calcAllUncompletedTickets
  );
  const total = totalData.high + totalData.normal + totalData.low;
  let data = [
    { name: "Total High", amount: totalData.high, percent: null },
    { name: "Total Normal", amount: totalData.normal, percent: null },
    { name: "Total Low", amount: totalData.low, percent: null },
    { name: "Total Uncompleted", amount: total, percent: "10%" },
  ];

  return (
    <Container>
      {data.map(card => (
        <DashboardCard
          key={card.name}
          name={card.name}
          amount={card.amount}
          percent={card.percent}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  height: 134px;
  margin: 54px 30px 0 33px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
