import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Star from "@material-ui/icons/Star";
import Typography from "@mui/material/Typography";

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
    <>
      {!!login ? (
        <StarredRepoStyle>
          <Typography variant="subtitle1">{stars}</Typography>
          <Icon />
        </StarredRepoStyle>
      ) : (
        ""
      )}
    </>
  );
};

const StarredRepoStyle = styled.div`
  display: flex;
  align-items: center;

  margin-top: 5px;
`;

const Icon = styled(Star)`
  margin-left: 5px;
`;

export default StarredRepo;
