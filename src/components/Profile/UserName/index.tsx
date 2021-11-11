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

const UserNameStyle = styled.h2`
  font-size: 30px;
`;

export default UserName;
