const http = require("http")



let chacha = http.createServer((req, res)=>{
    if(req.url === "/" && req.method === "GET" ){
        res.end("Home route")
    }

    if(req.url === "/about"){
        res.end("About Route")
    }
})




chacha.listen(4000 , ()=>{
    console.log("server is running on port no : 3000");
    
})