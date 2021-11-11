import React from "react";
import styled from "styled-components";

type NameType = {
  company: string;
};

const UserCompany: React.FC<NameType> = ({ company }) => {
  return (
    <UserCompanyStyle>
      <h2>{!!company ? company : "Company not found"}</h2>
    </UserCompanyStyle>
  );
};

const UserCompanyStyle = styled.div``;

export default UserCompany;
