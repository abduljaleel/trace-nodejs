var seetru = require('./lib')({
  app: 'restify'
});

var restify = require('restify');

var superagent = require('superagent');

function respond(req, res) {
  console.log('Restify Request hit at', process.hrtime());

  superagent
    .get('http://localhost:3004/users/1')
    .end(function(err, response) {
      res.json({
        status: 'ok'
      });
    });

}

var server = restify.createServer();
server.get('/cars/2', respond);

server.listen(3002, function() {
  console.log('Restify server %s listening at %s', server.name, server.url);
});
