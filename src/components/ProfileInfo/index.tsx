import React, { useContext } from "react";
import styled from "styled-components";

import UserContext from "../../context/user";
import UserName from "../Profile/UserName";
import ProfileImage from "../Profile/ProfileImage";
import UserCompany from "../Profile/UserCompany";
import UserEmail from "../Profile/UserEmail";
import UserBlog from "../Profile/UserBlog";
import UserLocation from "../Profile/UserLocation";
import UserHireable from "../Profile/UserHireable";
import UserBio from "../Profile/UserBio";
import UserTwitter from "../Profile/UserTwitter";

const ProfileInfo: React.FC = () => {
  const { state } = useContext(UserContext);
  return (
    <Profile>
      {!!state.login ? (
        <>
          <ProfileImg>
            <ProfileImage avatar={state.avatar_url} />
            <UserTwitter twitter_username={state.twitter_username} />
          </ProfileImg>
          <ProfileItems>
            <UserName name={state.name} />
            <UserCompany company={state.company} />
            <UserBlog blog={state.blog} />
            <UserEmail email={state.email} />
            <UserLocation location={state.location} />
            <UserHireable hireable={state.hireable} />
            <UserBio bio={state.bio} />
          </ProfileItems>
        </>
      ) : (
        "Loading..."
      )}
    </Profile>
  );
};

const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-grow: 0;

  margin: 10px 50px;
  padding: 10px;
`;

const ProfileImg = styled.div`
  margin-top: 10px;
`;

const ProfileItems = styled.div`
  margin-left: 30px;
`;

export default ProfileInfo;
