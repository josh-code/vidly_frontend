import http from "./httpService";
// import { apiConfig } from "../config.json";
export function getGenres() {
  return http.get("/genres");
  // return http.get(apiConfig + "/genres");
}
