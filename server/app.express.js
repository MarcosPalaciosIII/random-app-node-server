const express = require('express');
const app = express()
const path = require('path');

function renderHtml(filePath, res, prefix) {
    res.sendFile(`${process.cwd()}${!!prefix ? `/${prefix}/` : '/'}${filePath}`);
    // res.sendFile(path.join(process.cwd(), filePath));
}

// ========== MIDDLEWARE =============

// app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.static('public'));
// app.use(express.static('views'));


//  ===========  ROUTES ===============

app.get('/', (req, res, next) => {
    renderHtml('/index.html', res);
})

app.get('/about', (req, res, next) => {
    renderHtml('/about.html', res, 'views');
})

app.get('/instructions', (req, res, next) => {
    renderHtml('/instructions.html', res, 'views');
})

app.get('/game', (req, res, next) => {
    renderHtml('/game.html', res, 'views');
})











// createServer(requestListener).listen(3000, () => {
//     console.log('Listening on port: 3000');
// });
app.listen(3000, () => {
    console.log('Listening on port: 3000');
});