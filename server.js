const express = require('express');
const app = express(); 
const path = require('path');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname + '/client/dist')));

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(8000, () => {
    console.log('listening on port 8000')
});