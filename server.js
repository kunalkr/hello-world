var express = require('express');
    wines   = require('./routes/wines');

var app     = express();

app.configure( function() {
  app.use(express.static('public'));
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
});

app.get('/wines', wines.findAll); 
app.get('/wines/:id', wines.findById);
app.post('/wines', wines.addWine);
app.put('/wines/:id', wines.updateWine);
app.delete('/wines/:id', wines.deleteWine);

//app.get('/wines', function (req, res) {
//  res.send([{name:'wine1'}, {name:'wine2'}]);
//})
//
//app.get('/wines/:id', function (req, res) {
//  res.send({id:req.params.id, name: "The name", description: "description"});
//})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s::%s", host, port, __dirname)

})
