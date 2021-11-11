import React from "react";
import styled from "styled-components";

type NameType = {
  email: string;
};

const UserEmail: React.FC<NameType> = ({ email }) => {
  return (
    <UserEmailStyle>
      <h2>{!!email ? email : "Email not found"}</h2>
    </UserEmailStyle>
  );
};

const UserEmailStyle = styled.div``;

export default UserEmail;
