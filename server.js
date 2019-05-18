'use strict';

const express = require('express');
process.env.PWD = process.cwd();

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(express.static(process.env.PWD + '/img'));
app.get('/', (req, res) => {
    // res.send('<h1>João Grego</h1>\n' + 
    //          '<img src="https://i.redd.it/7ixggbfxtsmy.png">');
    res.send('<h1>João Grego</h1>\n' + 
             '<img src="/security.png" />');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
