const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello world");
  } else {
    res.end("Something went wrong");
  }
});

server.listen(5000);
