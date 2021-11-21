import React from "react";
import styled from "styled-components";

type UserTwitterType = {
  twitter_username: string;
};

const UserTwitter: React.FC<UserTwitterType> = ({ twitter_username }) => {
  const url = "https://twitter.com/" + twitter_username;
  return (
    <Text>
      {!!twitter_username ? (
        <Link href={url}>
          <Icon className="fab fa-twitter"></Icon>
          {twitter_username}
        </Link>
      ) : (
        ""
      )}
    </Text>
  );
};

const Text = styled.h2`
  font-size: 20px;
  font-weight: 700;
`;

const Link = styled.a`
  color: #001219;
  text-decoration: none;
`;

const Icon = styled.i`
  margin-right: 5px;
`;

export default UserTwitter;
