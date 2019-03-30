#!/usr/bin/env node
var http = require("http");
const port = 8844;
const addres = "127.0.0.1";
console.log("started server at", addres, ":", port);
http
  .createServer((req, res) => {
    const fileName = "." + req.url;

    if (fileName === "./stream") {
      res.writeHead(200, {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
        "Access-Control-Allow-Origin": "*"
      });
      res.write("retry: 10000\n");
      res.write("event: connecttime\n");
      res.write("data: " + new Date() + "\n\n");
      res.write("data: " + new Date() + "\n\n");

      let interval = setInterval(res => {
        res.write("data: " + new Date() + "\n\n");
      }, 1000);

      req.connection.addListener("close", () => {
        clearInterval(interval);
      });
    }
  })
  .listen(port, addres);
