const http =require ("http");
const fs = require("fs");

const login=fs.readFileSync("./index.html" , "utf8")


const server=http.createServer((request,response)=>{
    let path=request.url;

    if (path === "/" || path.toLocaleLowerCase() === "/home")
    {
        response.end(login);
    }
    else if (path.toLowerCase()=== "/about")
    {
        const about = fs.readFileSync("./about.html" , "utf8");
        response.end(about)
    }
    else if (path.toLowerCase() === "/contact")
    {
        const contact = fs.readFileSync("./contact.html" , "utf-8")
        response.end(contact)
    }
    else if (path.toLocaleLowerCase() === "/products") {
        const products = fs.readFileSync("./products.html" , "utf-8")
        response.end(products);
    }
    else 
    {
        response.end("Page not found")
    }
    
});

server.listen(8000);