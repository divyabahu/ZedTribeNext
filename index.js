const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const FlightHandler = require('./pages/api/flight');

app.prepare().then(() => {
  const server = express();

  server.get('/api/flight', (req, res) => {
    return FlightHandler(req, res);
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('Server started on port 3000');
  });
});


// http://localhost:3000/api/flight?registration=N67890