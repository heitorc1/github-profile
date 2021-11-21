import React from "react";
import styled from "styled-components";

type UserLocationType = {
  location: string;
};

const UserLocation: React.FC<UserLocationType> = ({ location }) => {
  return (
    <UserLocationStyle>
      <h2>
        {!!location ? (
          <UserLocationStyle>
            <Icon className="fas fa-map-marker-alt" />
            <Text>{location}</Text>
          </UserLocationStyle>
        ) : (
          "Location not found"
        )}
      </h2>
    </UserLocationStyle>
  );
};

const UserLocationStyle = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.i`
  margin-right: 10px;
`;

const Text = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-left: 5px;
`;

export default UserLocation;
