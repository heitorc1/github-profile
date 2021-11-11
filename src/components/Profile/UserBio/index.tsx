import React from "react";
import styled from "styled-components";

type UserBioType = {
  bio: string;
};

const UserBio: React.FC<UserBioType> = ({ bio }) => {
  return (
    <UserBioStyle>
      <h2>{!!bio ? bio : "Bio not found"}</h2>
    </UserBioStyle>
  );
};

const UserBioStyle = styled.div``;

export default UserBio;
