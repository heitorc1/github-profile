type AvatarType = {
  avatar: string;
};

const ProfileImage: React.FC<AvatarType> = ({ avatar }) => {
  return (
    <>
      <img src={avatar} alt="Profile Image" />
    </>
  );
};

export default ProfileImage;
