import React from "react";
import styled from "@emotion/styled";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";


export default function UserInfo({ user }) {
  return (
    <Div>
      <Divider orientation="vertical" variant="middle" flexItem />
      <P>
        {user.name}
        {/* очень длинное-предлинное имя, прямо нереально длиннючее вот вообще */}
      </P>
      <AvatarContainer>
        <Avatar
          alt={user.name}
          src={user.avatar}
          sx={{ width: 40, height: 40 }}
        />
      </AvatarContainer>
    </Div>
  );
}

const AvatarContainer = styled.div`
  position: relative;
  right: 0;
  border: 1.5px solid #dfe0eb;
  border-radius: 50%;
  padding: 2.5px;
  justify-self: end;
`;

const P = styled.p`
  font-family: "Mulish";
  font-size: 14px;
  font-weight: 600;
  padding: 0 5px;
  text-align: end;
`;
const Div = styled.div`
  display: grid;
  grid-template-columns: 2px auto 45px;
  align-items: center;
  justify-content: space-between;
`;
