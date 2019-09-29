let http = require('http');
let dot = require('dotenv').config();
let createHandler = require('github-webhook-handler');
let handler = createHandler({path: '/webhook', secret: process.env.HOOK_SECRET });


http.createServer((req, res) => {
    handler(req, res, (err) => {
        res.statusCode = 404;
        res.end("No such location.");
    });
}).listen(8899);

handler.on('push', (err) => {
    console.log("push event");
});

