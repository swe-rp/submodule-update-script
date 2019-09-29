require('dotenv').config();

let http = require('http');
let createHandler = require('github-webhook-handler');
let handler = createHandler({path: '/webhook', secret: process.env.HOOK_SECRET });
let shell = require('shelljs');

http.createServer((req, res) => {
    handler(req, res, (err) => {
        res.statusCode = 404;
        res.end("No such location.");
    });
}).listen(process.env.PORT);

handler.on('push', (err) => {
    console.log("push event");
    shell.exec('./update.sh ' + process.env.DIR + ' ' + process.env.REPO_URL);
});

