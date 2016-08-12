var express = require('express');

const app = express();

app.use('/', (request, response) => {
    response.status(200).send('hello world');
});

app.listen(3000, error => {
    if(error) {
        console.error(error);
    } else {
        console.info(`
            ==> 🌎  Listening on port 3000.
            Open up http://localhost:3000/ in your browser.
         `);
    }
});