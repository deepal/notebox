const appRootPath = require('app-root-path');
const http = require('http');
const app = require('./routes');

app.get('*', (req, res) => {
    res.sendFile(appRootPath.resolve('dist/index.html'));
});

const server = http.createServer(app);

server.listen(process.env.PORT || 3000);