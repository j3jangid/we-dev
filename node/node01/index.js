const http = require("http");
const data1 = require("./Data/data1");

http.createServer((req, resp)=>{
    resp.writeHead(200, {"content-type": "application\json"});
    resp.write(JSON.stringify(data1));
    resp.end();
}).listen(1000);