const axios = require("axios");

const api = axios.create({
  baseURL: "http://forge.riastudio.fr",
  auth: {
    username: "matthieu.couvreur@riastudio.fr",
    password: "Sm8Gn9Nd"
  }
});

api
  .get("/users/current.json")
  .then(response => {
    if (response.status == 200) {
      console.log(response.data);
    }
  })
  .catch(error => console.log(error));
