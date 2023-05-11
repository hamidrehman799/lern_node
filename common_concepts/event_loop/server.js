const http = require("http");

const server = http.createServer((req, res) => {
  console.log("user hit the server");
  res.end("Hello World");
});

server.listen(4580, () => {
  console.log("Server is listening on port 4580...");
});
