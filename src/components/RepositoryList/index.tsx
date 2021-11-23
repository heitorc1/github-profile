import axios from "axios";
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Star from "@material-ui/icons/Star";
import styled from "styled-components";
import theme from "../../assets/theme";

type RepositoryListType = {
  login: string;
};

type RepositoryType = {
  id: number;
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
};

const RepositoryList: React.FC<RepositoryListType> = ({ login }) => {
  const [repos, setRepos] = useState<Array<RepositoryType>>([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/" + login + "/repos")
      .then(({ data }) => setRepos(data));
  }, [login]);

  return (
    <RepositoryListStyle>
      {!!login ? (
        <>
          {repos.map((value) => (
            <UserRepository key={value.id}>
              <Name variant="h6" m={1}>
                {value.name}
              </Name>
              <Name variant="body1" mx={1} mt={3}>
                {value.description}
              </Name>
              <Line>
                <Name mx={1} mt={5}>
                  {value.stargazers_count}
                </Name>
                <Icon color="primary" />
                <Name mx={1} mt={5}>
                  {value.language}
                </Name>
              </Line>
            </UserRepository>
          ))}
        </>
      ) : (
        ""
      )}
    </RepositoryListStyle>
  );
};

const RepositoryListStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const UserRepository = styled.div`
  padding: 10px 40px;
  margin: 10px;

  border-radius: 5px;
  background-color: ${theme.colors.primary.dark};

  display: flex;
  flex-direction: column;
  width: 370px;
  min-height: 200px;

  font-size: 20px;
`;

const Name = styled(Typography)`
  color: ${theme.colors.primary.contrastText};
`;

const Line = styled.div`
  display: flex;
  align-items: flex-end;

  margin-bottom: 5px;
`;

const Icon = styled(Star)`
  margin-top: 35px;
`;

export default RepositoryList;
