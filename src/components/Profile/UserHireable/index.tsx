import React from "react";
import Typography from "@mui/material/Typography";

type UserHireableType = {
  hireable: boolean;
};

const UserHireable: React.FC<UserHireableType> = ({ hireable }) => {
  return (
    <>
      <h2>
        {!!hireable ? (
          <>
            <Typography variant="h6" ml={1}>
              Is hireable? {hireable}
            </Typography>
          </>
        ) : (
          ""
        )}
      </h2>
    </>
  );
};

export default UserHireable;
