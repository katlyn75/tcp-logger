const app = require('./lib/app');

const PORT = 15678;

app.on('listening', () => {
    //console.log('tcp server listening on port', PORT);
});

app.listen(PORT);

