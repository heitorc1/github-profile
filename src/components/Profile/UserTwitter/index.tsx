import React from "react";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Twitter from "@material-ui/icons/Twitter";
import theme from "../../../assets/theme";

type UserTwitterType = {
  twitter_username: string;
};

const UserTwitter: React.FC<UserTwitterType> = ({ twitter_username }) => {
  const url = "https://twitter.com/" + twitter_username;
  return (
    <>
      {!!twitter_username ? (
        <Line>
          <Typography variant="h6">
            <Link href={url}>
              <Icon />
              {twitter_username}
            </Link>
          </Typography>
        </Line>
      ) : (
        ""
      )}
    </>
  );
};

const Line = styled.div`
  display: flex;
  align-items: center;
`;

const Link = styled.a`
  color: ${theme.colors.primary.text};
  text-decoration: none;
`;

const Icon = styled(Twitter)`
  margin-right: 5px;
`;

export default UserTwitter;
