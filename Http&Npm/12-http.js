const http = require('http')

const server =  http.createServer((req,res)=>{

    if(req.url === '/'){
        res.write(`
            <h1>Welcome to first node server</h1>
            <hr>
            <p>this is the home page</p>
        `)
    }
    if(req.url === '/about'){
        res.write(`
            <h1>this is about our history</h1>
            <p>if you want back to home page just press here</p>
            <a href='/'> Home Page</a>
        `)
    }
    else{
    res.end(`<h1>Oops!</h1><a href='/'> Home Page</a>`)
    }
})

server.listen(8080)