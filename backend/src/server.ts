import http from 'http';
import initApplication from './app';

initApplication().then((app) => {
  const port = process.env.PORT || 3000
  app.set('port', port);

  /**
   * Create HTTP server.
   */
  const server = http.createServer(app);

  /**
   * Event listener for HTTP server "listening" event.
   */
  function onListening() {
    const address = server.address();
    const bind = typeof address === 'string' ? `pipe ${address}` : `port ${address?.port}`;
    console.info(`Listening on ${bind}`);
  }

  /**
   * Listen on provided port, on all network interfaces.
   */
  server.listen(port);
  server.on('listening', onListening);

  // TODO Add proper error handling
  server.on('error', (error: Error) => {
    console.error(error);
    throw error;
  });
});
