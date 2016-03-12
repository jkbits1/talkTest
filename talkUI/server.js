/**
 * Created by Jon on 12/03/16.
 */


// wrap in IIFE, just to be tidy
(() => {
  const Path = require('path');
  const Hapi = require('hapi');
  const Inert = require('inert');

  var port = 3000;

  if (process.env.NODE_ENV !== undefined) {
    console.error("NODE_ENV exists");

    if (process.env.NODE_ENV === "production") {
      console.error("NODE_ENV = production");

      port = process.env.PORT;
    }
    else if (process.env.NODE_ENV === "development") {
      console.error("NODE_ENV = development");
    }
    else {
      console.error("NODE_ENV = other");
    }
  }
  else {
    console.error("no NODE_ENV found");
  }

  const server = new Hapi.Server({
    connections: {
      routes: {
        files: {
          relativeTo: Path.join(__dirname, 'public')
        }
      }
    }
  });
  server.connection({port: port});

  server.register(Inert, () => {
  });

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

  server.route({
    method: 'GET',
    path: '/elm2',
    handler: {
      file: 'elm/puzzle2.html'
    }
  });

  server.route({
    method: 'GET',
    path: '/rxjs',
    handler: {
      file: 'rxjs/index.html'
    }
  });

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: '.',
        redirectToSlash: true,
        index: true
      }
    }
  });

  server.start((err) => {

    if (err) {
      throw err;
    }

    console.log('Server running at:', server.info.uri);
  });
})();