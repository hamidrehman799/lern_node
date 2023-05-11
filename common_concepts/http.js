const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  } else if (req.url === "/about") {
    res.end("Here is our short history");
  } else {
    res.statusCode = 404;
    res.end("Error 404: Page not found");
  }
});

server.listen(4580, () => {
  console.log("Server is listening on port 4580...");
});
