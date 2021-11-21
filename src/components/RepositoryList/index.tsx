import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

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
              <Name>{value.name}</Name>
              <Description>{value.description}</Description>
              <Line>
                <Number>{value.stargazers_count}</Number>
                <Icon className="fas fa-star" />
                <Language>{value.language}</Language>
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
  flex-grow: 1;
`;

const UserRepository = styled.div`
  padding: 10px 40px;
  margin: 10px;

  border-radius: 5px;
  background-color: #ee9b0070;

  display: flex;
  flex-direction: column;
  min-width: 370px;
  min-height: 180px;

  font-size: 20px;
`;

const Name = styled.p`
  font-weight: 500;
`;

const Description = styled.p`
  font-size: 16px;

  margin-top: 0;
`;

const Line = styled.div`
  display: flex;
  align-items: center;
`;

const Language = styled.p`
  font-size: 14px;
`;

const Number = styled.p`
  margin-right: 5px;
`;

const Icon = styled.i`
  font-size: 15px;
  margin-right: 20px;
`;

export default RepositoryList;
