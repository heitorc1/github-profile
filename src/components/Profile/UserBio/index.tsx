import React from "react";
import styled from "styled-components";

type UserBioType = {
  bio: string;
};

const UserBio: React.FC<UserBioType> = ({ bio }) => {
  return (
    <UserBioStyle>
      <Text>{!!bio ? bio : "Bio not found"}</Text>
    </UserBioStyle>
  );
};

const UserBioStyle = styled.div`
  padding: 10px 40px;

  border-radius: 5px;
  background-color: #ee9b0070;

  max-width: 850px;
`;

const Text = styled.p`
  font-size: 18px;
  font-weight: 400;
  font-style: italic;
`;

export default UserBio;
