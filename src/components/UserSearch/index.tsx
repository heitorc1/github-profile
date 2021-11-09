import React, { useState } from "react";
import styled from "styled-components";
import UserSearchButton from "../UserSearchButton";

const UserSearch: React.FC = () => {
  const [user, setUser] = useState("");

  return (
    <>
      <LabelField htmlFor="userSearch">Username</LabelField>
      <InputField
        type="text"
        name="inputUser"
        id="inputUser"
        placeholder="Type username here"
        onChange={(event) => setUser(event.target.value)}
      />
      <UserSearchButton user={user} />
    </>
  );
};

const LabelField = styled.label`
  margin-left: 10px;
  margin-right: 10px;
`;

const InputField = styled.input`
  margin: 10px;
  padding: 10px;
`;

export default UserSearch;
