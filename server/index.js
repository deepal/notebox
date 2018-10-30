const express = require('express');
const http = require('http');
const auth = require('http-auth');
const appRootPath = require('app-root-path');
const apiRoutes = require('./api');

const basicAuth = auth.basic({
    realm: "deepal.io"
}, (username, password, cb) => cb (username == 'deepal' && password == 'vishi'));

const app = express();
app.use(auth.connect(basicAuth));

app.use(express.static(appRootPath.resolve('./dist')));

app.use('/api', apiRoutes);

app.get('*', (req, res) => {
    res.sendFile(appRootPath.resolve('dist/index.html'));
});

const server = http.createServer(app);

server.listen(process.env.PORT || 8001);