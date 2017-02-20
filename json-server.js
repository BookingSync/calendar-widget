const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

server.use(function(req, res, next) {
  res.header('content-type', 'application/vnd.api+json');
  next();
});

server.use('/api/v2/public', router);

server.listen(3000, function () {
  console.log('JSON Server is running');
});
