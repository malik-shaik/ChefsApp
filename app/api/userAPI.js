import api from "./api";

const endpoint = "/user";

const login = async (data) => {
  const apiUrl =
    data.id && data.token ? `${endpoint}/facebookauth` : `${endpoint}/login`;
  console.log(apiUrl);
  const response = await api.post(apiUrl, data);
  if (response.problem) return console.log(response.data);
  console.log("response", response.data);
};

export default { login };
