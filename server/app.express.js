// const fs = require('fs');
// const  path = require('path');
// const { createServer } = require('http');
// let contentType = 'text/html';

// const getContentType = (filePath) => {
//     const extname = path.extname(filePath);    

//     switch (extname) {
//         case '.js':
//             contentType = 'text/javascript';
//             break;
//         case '.css':
//             contentType = 'text/css';
//             break;
//         case '.json':
//             contentType = 'application/json';
//             break;
//         case '.png':
//             contentType = 'image/png';
//             break; 
//         case '.jpeg':     
//         case '.jpg':
//             contentType = 'image/jpg';
//             break;
//         case '.gif':
//             contentType = 'image/gif';
//             break;
//         case '.wav':
//             contentType = 'audio/wav';
//             break;
//         case ".ico": 
//             contentType = "application/vnd.microsoft.icon";
//             break;
//         default:
//             contentType = 'text/html';
//         break;
//         // default:
//         //     contentType = "application/octet-stream";
//         //     break;
//     }

//     return contentType;
// }

// const requestListener = ((req, res) => {
//     const contentType = getContentType(req.url)

//     res.writeHead(200, { 'Content-Type': contentType });

//     const serve = (pathToFile) => {
//         fs.readFile(pathToFile, "utf8", (err, content) => {
//             if(err) {
//                 console.log("There was an error loading page: ", {err})
//                 res.writeHead(404);
//                 let indexFile = JSON.stringify({error:"Resource not found", err});
//                 res.end(indexFile);
//             }

//             // setTimeout(() => res.end(content), 500)
//             res.end(content);
//         })
//     }

//     // ==========  ROUTES =========

//     switch(req.url) {
//         case '/':
//             serve(path.join(process.cwd(), 'index.html'));
//         break;
//         case '/about':
//             serve(path.join(process.cwd(), 'views/about.html'));
//         break;
//         case '/instructions':
//             serve(path.join(process.cwd(), 'views/instructions.html'));
//         break;
//         case '/game':
//             serve(path.join(process.cwd(), 'views/game.html'));
//         break;
//         default:
//             if("application/vnd.microsoft.icon" === contentType) {
//                 req.url = `public/assets/images/${req.url}`
//             }
//             ['image/png','image/jpg','image/gif', "application/vnd.microsoft.icon"].includes(contentType) ? serve(path.join('./', req.url)) :
//             serve(path.join(process.cwd(), req.url));
//             // serve(`./${req.url}`)
//             console.log({cwd: path.join(process.cwd(), req.url)})
//     }
// })


const [app = express(), { static }] = [require('express')];
// const express = require('express');
// const app = express()

function renderHtml(filePath) {
    res.sendFile(path.join(process.cwd(), filePath));
}

app.use(static('public'));
app.use(static('views'));

app.get('/', (req, res, next) => {
    renderHtml('index.html');
})

app.get('/about', (req, res, next) => {
    renderHtml('about.html');
})

app.get('/instructions', (req, res, next) => {
    renderHtml('instructions.html');
})

app.get('/game', (req, res, next) => {
    renderHtml('game.html');
})











// createServer(requestListener).listen(3000, () => {
//     console.log('Listening on port: 3000');
// });
app.listen(3000, () => {
    console.log('Listening on port: 3000');
});