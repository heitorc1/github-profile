import React from "react";
import styled from "styled-components";

type UserBlogType = {
  blog: string;
};

const UserBlog: React.FC<UserBlogType> = ({ blog }) => {
  return (
    <UserBlogStyle>
      {!!blog ? <Link href={blog}>{blog}</Link> : ""}
    </UserBlogStyle>
  );
};

const UserBlogStyle = styled.div`
  margin-top: 20px;
`;

const Link = styled.a`
  font-size: 20px;
  font-weight: 500;
  color: #001219;
  text-decoration: none;
`;

export default UserBlog;
