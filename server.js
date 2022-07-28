//Install express server
const express = require('express');
const path = require('path');

const app = express();

//Server only the static files form the dist directory
app.use(express.static('./dist/jabendon'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/jabendon/'}),
);

//Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);