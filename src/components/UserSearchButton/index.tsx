import React, { useContext } from "react";
import UserContext from "../../context/user";
import styled from "styled-components";
import getUser from "../../services/userService";

type UserSearchButtonProps = {
  user: string;
};

const UserSearchButton: React.FC<UserSearchButtonProps> = ({ user }) => {
  const { state, setState } = useContext(UserContext);

  async function searchUser() {
    const response = await getUser(user);
    setState(response);
  }

  return (
    <>
      <SearchButton onClick={searchUser}>Search user</SearchButton>
    </>
  );
};

const SearchButton = styled.button`
  margin-left: 10px;
  padding: 5px;
`;

export default UserSearchButton;
