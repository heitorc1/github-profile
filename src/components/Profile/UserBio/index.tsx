import React from "react";
import styled from "styled-components";
import Typography from "@mui/material/Typography";

import theme from "../../../assets/theme";

type UserBioType = {
  bio: string;
};

const UserBio: React.FC<UserBioType> = ({ bio }) => {
  return (
    <UserBioStyle>
      <>{!!bio ? <Text variant="body1">{bio}</Text> : "Bio not found"}</>
    </UserBioStyle>
  );
};

const UserBioStyle = styled.div`
  padding: 10px 40px;

  border-radius: 5px;
  background-color: ${theme.colors.primary.dark};

  max-width: 850px;
`;

const Text = styled(Typography)`
  padding: 10px;
  font-style: italic;
  color: ${theme.colors.primary.contrastText};
`;

export default UserBio;
