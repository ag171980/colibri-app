import axios from "axios";

const urlBase = process.env.REACT_APP_URL_BACKEND_BASE;

const signIn = async (user) => {
  let url = `${urlBase}${process.env.REACT_APP_URL_USER}`;

  const response = await axios.post(url, user);

  return response;
};

export const userService = {
  signIn,
};
