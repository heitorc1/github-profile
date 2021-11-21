import React from "react";
import styled from "styled-components";

type UserHireableType = {
  hireable: boolean;
};

const UserHireable: React.FC<UserHireableType> = ({ hireable }) => {
  return (
    <UserHireableStyle>
      <h2>
        {!!hireable ? (
          <>
            <p>Is hireable? {hireable}</p>
          </>
        ) : (
          ""
        )}
      </h2>
    </UserHireableStyle>
  );
};

const UserHireableStyle = styled.div``;

export default UserHireable;
