import axios from "axios";

async function getUser(user: string) {
  const { data } = await axios.get("https://api.github.com/users/" + user);
  return data;
}

export default getUser;
