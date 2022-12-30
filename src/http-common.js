import axios from "axios";
export default axios.create({
  baseURL: "https://nores-api-payement.deta.dev/",
  headers: {
    "Content-type": "application/json"
  }
});