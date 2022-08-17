const fs = require('fs');
const  path = require('path');
const { createServer } = require('http');

const getContentType = (filePath) => {
    const extname = path.extname(filePath);    
    let contentType = 'text/html';

    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break; 
        case '.jpeg':     
        case '.jpg':
            contentType = 'image/jpg';
            break;
        case '.gif':
            contentType = 'image/gif';
            break;
        case '.wav':
            contentType = 'audio/wav';
            break;
        case ".ico": 
            contentType = "application/vnd.microsoft.icon";
            break;
        default:
            contentType = 'text/html';
        break;
        // default:
        //     contentType = "application/octet-stream";
        //     break;
    }

    return contentType;
}

const requestListener = ((req, res) => {
    const contentType = getContentType(req.url)

    res.writeHead(200, { 'Content-Type': contentType });

    const serve = (pathToFile) => {
        fs.readFile(pathToFile, "utf8", (err, content) => {
            if(err) {
                console.log("There was an error loading page: ", {err})
                res.writeHead(404);
                res.end(err);
                // indexFile = JSON.stringify({error:"Resource not found", err});
                // process.exit(1)
            }

            res.end(content);
        })
    }

    // ==========  ROUTES =========

    switch(req.url) {
        case '/':
            serve(path.join(process.cwd(), 'index.html'));
        break;
        case '/about':
            serve(path.join(process.cwd(), 'views/about.html'));
        break;
        case '/instructions':
            serve(path.join(process.cwd(), 'views/instructions.html'));
        break;
        case '/game':
            serve(path.join(process.cwd(), 'views/game.html'));
        break;
        default:
            serve(path.join(process.cwd(), req.url));
    }
})

createServer(requestListener).listen(3000, () => {
    console.log('Listening on port: 3000');
});