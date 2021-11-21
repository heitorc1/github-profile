import React from "react";
import styled from "styled-components";

type NameType = {
  company: string;
};

const UserCompany: React.FC<NameType> = ({ company }) => {
  return (
    <UserCompanyStyle>
      {!!company ? (
        <>
          <Icon className="fas fa-building fa-lg" />
          <Text>{company}</Text>
        </>
      ) : (
        ""
      )}
    </UserCompanyStyle>
  );
};

const UserCompanyStyle = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.i`
  margin-right: 5px;
`;

const Text = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-left: 5px;
`;

export default UserCompany;
