/**
 * Created by Jon on 12/03/16.
 */

const Path = require('path');
const Hapi = require('hapi');
const Inert = require('inert');

const server = new Hapi.Server({
  connections: {
    routes: {
      files: {
        relativeTo: Path.join(__dirname, 'public')
      }
    }
  }
});
server.connection({ port: 3000 });

server.register(Inert, () => {});

//server.route({
//  method: 'GET',
//  path: '/{param*}',
//  handler: {
//    directory: {
//      path: '.',
//      redirectToSlash: true,
//      index: true
//    }
//  }
//});

//server.route({
//  method: 'GET',
//  path: '/{path*}',
//  handler: {
//    file: 'elm/elmPage1.html'
//  }
//});

server.route({
  method: 'GET',
  path: '/elm',
  handler: {
    file: 'elm/elmPage1.html'
  }
});

server.start((err) => {

  if (err) {
    throw err;
  }

  console.log('Server running at:', server.info.uri);
});