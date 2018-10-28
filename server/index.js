const express = require('express');
const http = require('http');
const path = require('path');
const auth = require('http-auth');
const appRootPath = require('app-root-path');

const basicAuth = auth.basic({
    realm: "deepal.io"
}, (username, password, cb) => cb (username == 'deepal' && password == 'vishi'));

const app = express();
app.use(auth.connect(basicAuth));

app.use(express.static(appRootPath.resolve('frontend')));

app.get('/', (req, res) => {
    res.sendFile(appRootPath.resolve('frontend/index.html'));
});

app.get('/create', (req, res) => {
    res.sendFile(appRootPath.resolve('frontend/editor.html'));
});

app.get('/manage', (req, res) => {
    res.sendFile(appRootPath.resolve('frontend/manage-notebox.html'));
});

const server = http.createServer(app);

server.listen(process.env.PORT || 8001);