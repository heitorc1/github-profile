import React, { useState } from "react";
import styled from "styled-components";
import UserSearchButton from "../UserSearchButton";
import Typography from "@mui/material/Typography";
import theme from "../../assets/theme";

const UserSearch: React.FC = () => {
  const [user, setUser] = useState("");

  return (
    <Wrapper>
      <Typography variant="h4">Username</Typography>
      <InputField
        type="text"
        name="inputUser"
        id="inputUser"
        placeholder="Type username here"
        onChange={(event) => setUser(event.target.value)}
      />
      <UserSearchButton user={user} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const InputField = styled.input`
  margin: 10px;
  padding: 10px;

  background-color: ${theme.colors.secondary.light};
  border-radius: 5px;
  border: 1px groove ${theme.colors.secondary.dark};
`;

export default UserSearch;
