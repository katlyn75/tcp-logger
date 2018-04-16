const app = require('../lib/app');
const net = require('net');
const assert = require('assert');


describe('testing', () => {

    const PORT = 15677;

    beforeEach(done => {
        app.listen(PORT, done);
    });

    let client = null;
    beforeEach(done => {
        net.connect(15677, socket => {
            client = socket;
            client.setEncoding('utf8');
            done();
        });

    });

    afterEach(() => {
        app.close();
    });

    afterEach(() => {
        client.destroy();
    });

    it('test'), done => {
        const message = 'echo test';

        client.on('data', received => {
            assert.equal(received, message);
            done();
        });
        client.write(message);

    };

});