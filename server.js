var express         = require('express');
var app             = express();
var PORT            = process.env.PORT || 8080;
var server          = app.listen(PORT,() => console.log(`Listening on ${ PORT }`));
const cors = require('cors');
app.use(cors());
app.use(express.static(__dirname + '/index/'));

// If you have problem with CORS, you can run NodeJS server with your application
// But then you need to install NodeJS: https://nodejs.org/en/

// To install dependencies run command:
// npm install 
// To start this small application run command:
// node server.js

// Then copy your application to directory "index", change your main HTML file to index.html and open web browser on "localhost:8080". 