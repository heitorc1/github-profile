import React from "react";
import Typography from "@mui/material/Typography";

import styled from "styled-components";
import theme from "../../../assets/theme";

type UserBlogType = {
  blog: string;
};

const UserBlog: React.FC<UserBlogType> = ({ blog }) => {
  return (
    <UserBlogStyle>
      {!!blog ? (
        <Link href={blog}>
          <Typography variant="h6">{blog}</Typography>
        </Link>
      ) : (
        ""
      )}
    </UserBlogStyle>
  );
};

const UserBlogStyle = styled.div`
  margin-top: 20px;
`;

const Link = styled.a`
  color: ${theme.colors.primary.text};
  text-decoration: none;
`;

export default UserBlog;
