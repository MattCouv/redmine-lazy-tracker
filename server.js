const express = require("express");
const bodyParser = require("body-parser");
const ApiRouter = require("./ApiRouter");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Always return the main index.html on routes that should return a "page" (e.g. /contact), so react-router will render the route in the client
app.use("/api", ApiRouter);

app.set("port", process.env.PORT || 3001);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});
