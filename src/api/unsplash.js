import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 9kAkcC1b9vPMjxmQOhbNWn55bbkjIwC5uduH76-ICgQ",
    "Cache-Control": "No-Cache",
  },
});
