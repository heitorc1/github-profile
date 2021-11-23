import React from "react";
import styled from "styled-components";
import Typography from "@mui/material/Typography";

type UserFollowersType = {
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
};

const UserFollowers: React.FC<UserFollowersType> = ({
  followers,
  following,
  followers_url,
  following_url,
}) => {
  return (
    <UserFollowersStyle>
      {!!(followers | following) ? (
        <>
          <Typography variant="subtitle1">
            <Link href={followers_url}>{followers} Followers</Link>
          </Typography>
          <Typography variant="subtitle1">
            <Link href={following_url}>{following} Following</Link>
          </Typography>
        </>
      ) : (
        ""
      )}
    </UserFollowersStyle>
  );
};

const UserFollowersStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

export default UserFollowers;
