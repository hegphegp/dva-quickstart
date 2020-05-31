import request from "../utils/request";

export function fatchData() {
  const response = request("/api/users");
  console.log('request("/api/users")');
  console.log(response);
  return response;
}

export function fetchRemoveItem(query) {
  console.log(query);
  return true
}
