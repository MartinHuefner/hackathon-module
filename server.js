const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Serve OpenAPI spec
const path = require('path');
app.get('/openapi.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'openapi.json'));
});

app.get('/test/hackathon-module', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.send(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Hackathon Module</title>
  </head>
  <body>
    <img src="https://app.tech-riders.de/p/2364/photo" alt="module photo" style="max-width:100%;height:auto;" />
    <p>I was able to create a module</p>
  </body>
</html>`);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
