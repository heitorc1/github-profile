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
import UserLogin from "../Profile/UserLogin";
import UserFollowers from "../Profile/UserFollowers";
import StarredRepo from "../Profile/StarredRepo";
import RepositoryList from "../RepositoryList";

const ProfileInfo: React.FC = () => {
  const { state } = useContext(UserContext);
  return (
    <Profile>
      {!!state.login ? (
        <>
          <ProfileImg>
            <ProfileImage avatar={state.avatar_url} />
            <UserTwitter twitter_username={state.twitter_username} />
            <UserFollowers
              followers={state.followers}
              followers_url={state.followers_url}
              following={state.following}
              following_url={state.following_url}
            />
            <StarredRepo login={state.login} />
          </ProfileImg>
          <Wrapper>
            <ProfileItems>
              <UserName name={state.name} />
              <UserLogin login={state.login} />
              <UserBio bio={state.bio} />
              <UserBlog blog={state.blog} />
              <UserEmail email={state.email} />
              <UserLocation location={state.location} />
              <UserCompany company={state.company} />
              <UserHireable hireable={state.hireable} />
            </ProfileItems>
            <ProfileItems>
              <RepositoryList login={state.login} />
            </ProfileItems>
          </Wrapper>
        </>
      ) : (
        ""
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileItems = styled.div`
  margin: 10px 30px;

  padding: 10px 40px;
  border-radius: 5px;
  border: 1px solid #0a9396;

  background-color: #e9d8a6;
`;

export default ProfileInfo;
