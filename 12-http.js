const http = require('http')
const server = http.createServer((req,res)=>{
if(req.url === '/')
{
    res.end('Welcome to our home page')
}
if(req.url === '/about')
{
    res.end('Here is our short history')
}
res.end(`<h1>Oops we don't find the page you are looking for</h1>
<a href="/">Back to Home</a>`)
})
server.listen(5000)