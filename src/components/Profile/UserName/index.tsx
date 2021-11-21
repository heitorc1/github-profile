import React from "react";
import styled from "styled-components";

type NameType = {
  name: string;
};

const UserName: React.FC<NameType> = ({ name }) => {
  return (
    <>
      <UserNameStyle>{!!name ? name : "Username not found"}</UserNameStyle>
    </>
  );
};

const UserNameStyle = styled.p`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 0;
`;

export default UserName;
