import React, { useContext } from "react";
import UserContext from "../../context/user";
import styled from "styled-components";
import getUser from "../../services/userService";
import theme from "../../assets/theme";
import Typography from "@mui/material/Typography";

type UserSearchButtonProps = {
  user: string;
};

const UserSearchButton: React.FC<UserSearchButtonProps> = ({ user }) => {
  const { setState } = useContext(UserContext);

  async function searchUser() {
    const response = await getUser(user);
    setState(response);
  }

  return (
    <>
      <SearchButton onClick={searchUser}>
        <Typography variant="button" px={2}>
          Search
        </Typography>
      </SearchButton>
    </>
  );
};

const SearchButton = styled.button`
  margin-left: 10px;
  padding: 7px;

  font-size: 18px;

  color: ${theme.colors.primary.contrastText};
  background-color: ${theme.colors.secondary.dark};
  border: 1px solid ${theme.colors.primary.dark};
  border-radius: 5px;

  &:active {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;

export default UserSearchButton;
