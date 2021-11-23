import React from "react";
import styled from "styled-components";
import Business from "@material-ui/icons/Business";
import Typography from "@mui/material/Typography";

type NameType = {
  company: string;
};

const UserCompany: React.FC<NameType> = ({ company }) => {
  return (
    <UserCompanyStyle>
      {!!company ? (
        <>
          <Business />
          <Typography variant="h6" ml={1}>
            {company}
          </Typography>
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

export default UserCompany;
