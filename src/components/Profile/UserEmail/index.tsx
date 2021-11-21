import React from "react";
import styled from "styled-components";

type NameType = {
  email: string;
};

const UserEmail: React.FC<NameType> = ({ email }) => {
  return <UserEmailStyle>{!!email ? <Text>{email}</Text> : ""}</UserEmailStyle>;
};

const UserEmailStyle = styled.div``;

const Text = styled.p`
  font-size: 15px;
`;

export default UserEmail;
