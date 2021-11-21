import React from "react";
import styled from "styled-components";

type UserLoginType = {
  login: string;
};

const UserLogin: React.FC<UserLoginType> = ({ login }) => {
  return <Login>{login}</Login>;
};

const Login = styled.p`
  font-size: 16px;
  margin-top: 0;
`;

export default UserLogin;
