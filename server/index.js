const appRootPath = require('app-root-path');
const http = require('http');
const express = require('express');
const serverRoutes = require('./routes');

const app = express();

app.use(serverRoutes);

app.get('*', (req, res) => {
    res.sendFile(appRootPath.resolve('dist/index.html'));
});

const server = http.createServer(app);

server.listen(process.env.PORT || 3000);