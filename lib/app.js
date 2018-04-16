const net = require('net');

const server = net.createServer(client /*socket*/ => {
    client.on('data', data => {
        client.write(data);
    
    });
});

module.exports = server;