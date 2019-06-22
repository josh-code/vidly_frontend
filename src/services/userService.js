import http from "./httpService";
// import { apiConfig } from "../config.json";

// const apiEndpoint = apiConfig + "/users";
const apiEndpoint = "/users";

export function register(user) {
  return http.post(apiEndpoint, {
    email: user.username,
    password: user.password,
    name: user.name
  });
}
