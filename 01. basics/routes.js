const fs = require("fs");

const routeHandler = (req, res) => {
    console.log(req.url, req.method, req.headers);
    const url = req.url;
    const method = req.method;
    if (url === "/") {
      res.write("<html>");
      res.write("<head><title>Submit form</title></head>");
      res.write(
        '<body><form action="/message" method="POST"><input type="text" name="message" /><button type="submit">Send</button></form></body>'
      );
      res.write("</html>");
      return res.end();
    }
    if (url === "/message" && method === "POST") {
      const body = [];
      req.on("data", (chunk) => {
        body.push(chunk);
      });
      return req.on("end", () => {
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split("=")[1];
        //   fs.writeFileSync("message. txt", message);
        fs.writeFile("message.txt", message, (error) => {
          res.statusCode = 302;
          res.setHeader("location", "/");
          return res.end();
        });
      });
    }
    res.setHeader("content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>Nodejs</title></head>");
    res.write("<body><h1>Hellooooo</h1></body>");
    res.write("</html>");
    res.end();
  }

  module.exports = routeHandler;