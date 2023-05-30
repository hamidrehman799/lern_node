const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("./public"));
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "./navbar-app/index.html"));
// });

// app.get("/about", (req, res) => {
//   res.status(200).send("About me");
// });

// app.get("/contact", (req, res) => {
//   res.status(200).send("Contact me");
// });

// app.all("*", (req, res) => {
//   res.status(404).send("404 not found");
// });

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
