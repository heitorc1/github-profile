import React, { useContext } from "react";
import UserContext from "../../context/user";
import GeneralInfo from "../GeneralInfo";
import ProfileImage from "../ProfileImage";

const ProfileInfo: React.FC = () => {
  const { state } = useContext(UserContext);
  return (
    <>
      <p>
        {!!state.login ? (
          <>
            <ProfileImage avatar={state.avatar_url} />
            <GeneralInfo
              name={state.name}
              company={state.company}
              blog={state.blog}
              location={state.location}
              email={state.email}
              hireable={state.hireable}
              bio={state.bio}
              twitter_username={state.twitter_username}
            />
          </>
        ) : (
          "Loading..."
        )}
      </p>
    </>
  );
};

export default ProfileInfo;
