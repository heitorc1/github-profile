import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

type StarredRepoType = {
  login: string;
};

const StarredRepo: React.FC<StarredRepoType> = ({ login }) => {
  const [stars, setStars] = useState("");

  useEffect(() => {
    axios
      .get("https://api.github.com/users/" + login + "/starred")
      .then(({ data }) => setStars(data.length));
  }, [login]);

  return (
    <StarredRepoStyle>
      {!!login ? (
        <>
          <Text>
            <Icon className="fas fa-star"></Icon>
            {stars}
          </Text>
        </>
      ) : (
        ""
      )}
    </StarredRepoStyle>
  );
};

const StarredRepoStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Text = styled.p`
  font-size: 18px;
  font-weight: 400;

  margin: 10px 0;
`;

const Icon = styled.i`
  margin-right: 6px;
`;

export default StarredRepo;
