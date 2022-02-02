import React from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export default function PageName({ name }) {
  return (
    <Div>
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: "bold",
          letterSpacing: "0.3",
        }}
      >
        {name}
      </Typography>
      {/* <P>{name}</P> */}
    </Div>
  );
}

const Div = styled.div`
  //   border: 1px solid red;
  margin-top: 36px;
  margin-left: 30px;
  width: 300px;
`;

// const P = styled.div`
//   font-weight: bold;
//   font-size: 24px;
//   line-height: 30px;
//   letter-spacing: 0.3px;
//   color: #252733; //TODO поменять цвет для тёмной темы
// `;
