import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:25070/v1.0",
  headers: {
    "Content-type": "application/json"
  }
});