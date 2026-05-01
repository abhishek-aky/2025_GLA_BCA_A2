const http = require("http");
let books = [{id:1, "title":"Vasant"}, {id:2, "title":"Flamingo"}];
const server = http.createServer((req, res)=>{
    res.writeHead(200, {"content-type":"application/JSON"});
    if(req.method === "GET" && req.url === '/books'){ //Read Operation ya GET Method
        res.end(JSON.stringify(books));
    }
    else if(req.method === "POST" && req.url === '/books'){ //Create
        let body = "";
        req.on("data", chunk => body+=chunk);
        req.on("end",()=>{
            if(!body){
                req.end(JSON.stringify({message:"No data Received"}));
            }
            try{
                const book = JSON.parse(body);
                books.push(book);
                res.end(JSON.stringify(book));
            }
            catch(err){
                res.end(JSON.stringify({message:"Invalid JSON data"}));
            }
        })

    }
    else if(req.method==="PUT"){ //Update
        books[0].id = 0;
        books[0].title = "Bharat ki Khoj";
        res.end(JSON.stringify({message:"Book Updated"}));
    }
    else if(req.method === "DELETE"){ //Delete
        books.pop();
        res.end(JSON.stringify({message:"Book Deleted Successfully"}));
    }
})

const port = 8080;
server.listen(port, ()=>{
    console.log(`Server is running at port http://localhost:${port}`);
})