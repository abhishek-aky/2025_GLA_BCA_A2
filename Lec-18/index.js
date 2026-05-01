const http = require("http");
const server = http.createServer((req, res)=>{
    res.writeHead(200, {"content-type" : "text/html"});

     const currentDateTime = new Date();
    res.write("<h2>Current Date and Time : </h2>")
    res.write("<p>"+ currentDateTime.toString() +"</p>");
    res.write("Hello Kya Haal Chaal");
    res.write("Kya chal rha");
    res.write("Sb badhiya");
    res.write("Haa sb");
    res.end();
})

const port = 8080;
server.listen(port, ()=>{
    console.log(`Server is running at localhost:${port}`);
})