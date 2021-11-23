import React from "react";
import Typography from "@mui/material/Typography";

type NameType = {
  name: string;
};

const UserName: React.FC<NameType> = ({ name }) => {
  return (
    <>
      {!!name ? (
        <Typography variant="h3" mt={2}>
          {name}
        </Typography>
      ) : (
        "Username not found"
      )}
    </>
  );
};

export default UserName;
