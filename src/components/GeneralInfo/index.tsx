import React from "react";

type GeneralInfoType = {
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  hireable: boolean;
  bio: string;
  twitter_username: string;
};

const GeneralInfo: React.FC<GeneralInfoType> = ({
  name,
  company,
  blog,
  location,
  email,
  hireable,
  bio,
  twitter_username,
}) => {
  return (
    <>
      <h2>Nome: {name}</h2>
      <h2>Companhia: {company}</h2>
      <h2>Blog: {blog}</h2>
      <h2>Localização: {location}</h2>
      <h2>Email: {email}</h2>
      <h2>Hireable: {hireable}</h2>
      <h2>Bio: {bio}</h2>
      <h2>Twitter: {twitter_username}</h2>
    </>
  );
};

export default GeneralInfo;
