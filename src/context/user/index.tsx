import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

type UserType = {
  login: string;
  avatar_url: string;
  html_url: string;
  followers_url: string;
  starred_url: string;
  subscription_url: string;
  organizations_url: string;
  repos_url: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  hireable: boolean;
  bio: string;
  twitter_username: string;
};

type PropsUserContext = {
  state: UserType;
  setState: Dispatch<SetStateAction<UserType>>;
};

const DEFAULT_VALUE = {
  state: {
    login: "",
    avatar_url: "",
    html_url: "",
    followers_url: "",
    starred_url: "",
    subscription_url: "",
    organizations_url: "",
    repos_url: "",
    name: "",
    company: "",
    blog: "",
    location: "",
    email: "",
    hireable: false,
    bio: "",
    twitter_username: "",
  },
  setState: () => {},
};

const UserContext = createContext<PropsUserContext>(DEFAULT_VALUE);

const UserContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);
  return (
    <UserContext.Provider value={{ state, setState }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider };
export default UserContext;
