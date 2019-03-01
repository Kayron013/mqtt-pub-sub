const mosca = require('mosca'),
    settings = {
        port: 1883
    },
    server = new mosca.Server(settings);

server.on('ready', _ => console.log('server is ready'));