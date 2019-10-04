import axios from "axios/index";
import { AUTH_URL } from "../constants/apis";

const authClient = (baseUrl) => (
  axios.create({
    baseURL: baseUrl,
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      // "Version": "1.0"
    },
  })
);

const clients = {
  default: {
    client: authClient(AUTH_URL),
  },
};

export default clients;
