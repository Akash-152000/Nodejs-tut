const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
    if(req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()}: ${req.url} is registered\n`;
  const myUrl = url.parse(req.url,true);
  console.log(myUrl);
  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("Homepage");
        break;
      case "/about":
        const username = myUrl.query.myname;
        res.end(`Hello ${username} welcome to About Page`);
        break;
      default:
        res.end("404 Page Not Found");
    }
  });
});

myServer.listen(8000, () => console.log("Server is running on port 8000"));
