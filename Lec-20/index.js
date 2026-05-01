const http = require("http");
const username = "shradha-khapra";
const url = `https://api.github.com/users/${username}`;
const server = http.createServer(async (req, res)=>{
    try{
        const response = await fetch(url);
        const data = await response.json();
        res.writeHead(200, {"content-type":"text/html"})

        const scrip = `<h2>GitHub Profile</h2>
        <h3>UserName : ${data.login}</h3>
        <h3> <img src="${data.avatar_url}"> </h3>
        <strong>Followers : ${data.followers}</strong>
        &nbsp;
        <strong>Following : ${data.following}</strong>
        <hr>
        <strong>Location : ${data.location}</strong>
        <br>
        <strong>Bio : ${data.bio}</strong>
        `;
        res.write(scrip);
        res.end();
    }
    catch(err){
        res.writeHead(500, {"content-type":"text/html"});
        res.end();
    }
})
const port = 4554;
server.listen(port, ()=>{
    console.log(`Server is running at http://localhost/${port}`);
})