const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/front-end/tutorial-canciones/dist/tutorial-canciones'));

app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+'/front-end/tutorial-canciones/dist/tutorial-canciones/index.html'));
});

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
 });

app.listen(process.env.PORT || 5000);
