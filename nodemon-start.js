/* global require, process, console */

// github.com/remy/nodemon
let nodemon = require('nodemon');
nodemon({
  script: 'json-server.js',
  ext: 'js json' // watching extensions
});

nodemon.on('start', function() {
  console.log('App has started');
}).on('quit', function() {
  console.log('App has quit');
  process.exit();
}).on('restart', function(files) {
  console.log('App restarted due to: ', files);
});
