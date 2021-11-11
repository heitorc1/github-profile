import styled from "styled-components";

type AvatarType = {
  avatar: string;
};

const ProfileImage: React.FC<AvatarType> = ({ avatar }) => {
  return (
    <>
      <Image src={avatar} alt="Profile Image" />
    </>
  );
};

const Image = styled.img`
  width: 128px;
  border-radius: 64px;
  border: 3px solid #5e5d5d;
  margin-top: 20px;
`;

export default ProfileImage;
