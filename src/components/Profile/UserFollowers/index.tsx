import React from "react";
import styled from "styled-components";

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
          <Text>
            <Link href={followers_url}>{followers} Followers</Link>
          </Text>
          <Text>
            <Link href={following_url}>{following} Following</Link>
          </Text>
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

const Text = styled.p`
  font-size: 15px;
  font-weight: 500;

  margin: 0;
  padding: 0;
`;

const Link = styled.a`
  font-size: 18px;
  text-decoration: none;
  color: inherit;
`;

export default UserFollowers;
