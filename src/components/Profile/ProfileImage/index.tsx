import Avatar from "@mui/material/Avatar";

type AvatarType = {
  avatar: string;
};

const ProfileImage: React.FC<AvatarType> = ({ avatar }) => {
  return (
    <>
      <Avatar
        src={avatar}
        alt="Profile Image"
        sx={{ width: 150, height: 150 }}
      />
    </>
  );
};

export default ProfileImage;
