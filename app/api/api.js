import { create } from "apisauce";

const api = create({
  baseURL: "http://localhost:5050/",
  headers: { "content-type": "application/json" }
});

export default api;
