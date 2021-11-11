import React from "react";
import styled from "styled-components";

type UserBlogType = {
  blog: string;
};

const UserBlog: React.FC<UserBlogType> = ({ blog }) => {
  return (
    <UserBlogStyle>
      <h2>{!!blog ? blog : "Blog not found"}</h2>
    </UserBlogStyle>
  );
};

const UserBlogStyle = styled.div``;

export default UserBlog;
