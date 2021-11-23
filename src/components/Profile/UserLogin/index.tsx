import Typography from "@mui/material/Typography";
import React from "react";

type UserLoginType = {
  login: string;
};

const UserLogin: React.FC<UserLoginType> = ({ login }) => {
  return (
    <Typography variant="h6" mb={3}>
      {login}
    </Typography>
  );
};

export default UserLogin;
