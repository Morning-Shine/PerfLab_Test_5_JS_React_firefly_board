import React from "react";
import styled from "@emotion/styled";
import DashboardCard from "./DashboardCard";
import { useSelector } from "react-redux";


export default function DashboardUserTotalUncompleted() {
  const totalUserData = useSelector(
    state => state.firebaseData.calcUserUncompletedTickets
  );

  const total = totalUserData.high + totalUserData.normal + totalUserData.low;

  const data = [
    { name: "High", amount: totalUserData.high, percent: null },
    { name: "Normal", amount: totalUserData.normal, percent: null },
    { name: "Low", amount: totalUserData.low, percent: null },
    { name: "Uncompleted", amount: total, percent: "20%" },
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
  margin: 0px 30px 0 33px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
