/* global require, console, process */
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(require('./db.js')());
const middlewares = jsonServer.defaults();
const port = Number(process.env.JSON_SERVER_PORT || 3000);

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

server.use(function(req, res, next) {
  res.header('content-type', 'application/vnd.api+json');
  next();
});

router.render = function(req, res) {
  let { data } = res.locals.data;
  const id     = req.query.rental_id;
  let date = new Date();

  // generate data

  switch (id) {
    case '832':
      data[0].attributes.availability = `11000${data[0].attributes.availability}`;
      // data starting from 3 days ago
      date.setDate(date.getDate() - 3);
      break;

    case '833':
      data[0].attributes.availability = `00000${data[0].attributes.availability}`;
      // data starting from 3 days ago
      date.setDate(date.getDate() - 3);
      break;

    case '834':
      data[0].attributes.availability = `11111${data[0].attributes.availability}`;
      break;

    default:
      data[0].attributes.availability = `00000${data[0].attributes.availability}`;
      break;
  }

  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  };
  const startDate = date.toLocaleString('en', options).split('/');
  const [month, day, year] = startDate;

  data[0].attributes.start_date = `${year}-${month}-${day}`;
  data[0].id = id;

  // merge data
  res.locals.data.data = data;

  res.jsonp(res.locals.data);
};

server.use('/api/v2/public', router);

server.listen(port, function() {
  console.log(`JSON Server is running on port ${port}`);
});
