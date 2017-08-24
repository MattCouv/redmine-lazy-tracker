const express = require("express");
const axios = require("axios");

const ApiGet = (req, res) => {
  let { credentials } = req;
  axios
    .get(req._parsedUrl.path, {
      baseURL: credentials.baseURL || "",
      auth: {
        username: credentials.username || "",
        password: credentials.password || ""
      }
    })
    .then(response => {
      if (response.status == 200) {
        res.json(response.data);
      } else {
        res.json({ error: "bad credentials" });
      }
    })
    .catch(error => res.status(500).json({ error: "Invalid request" }));
};

const authChecker = (req, res, next) => {
  // Grab the "Authorization" header.
  let auth = req.get("authorization");
  let baseURL = req.get("X-baseURL");
  // On the first request, the "Authorization" header won't exist, so we'll set a Response
  // header that prompts the browser to ask for a username and password.
  if (!auth && !baseURL) {
    // If the user cancels the dialog, or enters the password wrong too many times,
    // show the Access Restricted error message.
    res.status(401).send("Authorization Required");
  } else {
    // If the user enters a username and password, the browser re-requests the route
    // and includes a Base64 string of those credentials.
    let credentials = new Buffer(auth.split(" ").pop(), "base64")
      .toString("ascii")
      .split(":");

    req["credentials"] = {
      baseURL,
      username: credentials[0],
      password: credentials[1]
    };
    next();
  }
};

const ApiRouter = express.Router();

ApiRouter.use(authChecker);

ApiRouter.route("/*").get(ApiGet);

module.exports = ApiRouter;
