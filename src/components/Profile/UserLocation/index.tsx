import React from "react";
import styled from "styled-components";

type UserLocationType = {
  location: string;
};

const UserLocation: React.FC<UserLocationType> = ({ location }) => {
  return (
    <UserLocationStyle>
      <h2>{!!location ? location : "Location not found"}</h2>
    </UserLocationStyle>
  );
};

const UserLocationStyle = styled.div``;

export default UserLocation;
