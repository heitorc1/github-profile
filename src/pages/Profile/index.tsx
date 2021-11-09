import React from "react";
import ProfileInfo from "../../components/ProfileInfo";
import UserSearch from "../../components/UserSearch";

const Profile: React.FC = () => {
  return (
    <>
      <UserSearch />
      <ProfileInfo />
    </>
  );
};

export default Profile;
