import React, { useState } from "react";
import styled from "styled-components";
import UserSearchButton from "../UserSearchButton";

const UserSearch: React.FC = () => {
  const [user, setUser] = useState("");

  return (
    <Wrapper>
      <LabelField htmlFor="userSearch">Username</LabelField>
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

const LabelField = styled.label`
  margin: 10px 20px;

  font-size: 25px;
  font-weight: 700;
`;

const InputField = styled.input`
  margin: 10px;
  padding: 10px;

  background-color: #e9d8a6;
  border-radius: 5px;
  border: 1px groove #0a9396;
`;

export default UserSearch;
