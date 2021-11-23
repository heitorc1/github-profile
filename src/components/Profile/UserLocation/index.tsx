import React from "react";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Room from "@material-ui/icons/Room";

type UserLocationType = {
  location: string;
};

const UserLocation: React.FC<UserLocationType> = ({ location }) => {
  return (
    <>
      <h2>
        {!!location ? (
          <UserLocationStyle>
            <Room />
            <Typography variant="h6" ml={1}>
              {location}
            </Typography>
          </UserLocationStyle>
        ) : (
          "Location not found"
        )}
      </h2>
    </>
  );
};

const UserLocationStyle = styled.div`
  display: flex;
  align-items: center;
`;

export default UserLocation;
