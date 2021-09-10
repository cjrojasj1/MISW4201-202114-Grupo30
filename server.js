const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/front-end/tutorial-canciones/dist/tutorial-canciones'));

app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+'/front-end/tutorial-canciones/dist/tutorial-canciones/index.html'));
});

// Add headers before the routes are defined
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'https://ionic-grupo30.herokuapp.com');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});
app.listen(process.env.PORT || 5000);
