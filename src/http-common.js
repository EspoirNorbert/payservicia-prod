import axios from "axios";
export default axios.create({
  baseURL: "https://nores-api-payement.deta.dev/v1.0/",
  headers: {
    "Content-type": "application/json"
  }
});