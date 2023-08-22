const http = require("http");
const port = 3000;

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-Type": "text/html" });
    res.end("Hello http");
  })
  .listen(port, () => {
    console.log("Running http");
  });
