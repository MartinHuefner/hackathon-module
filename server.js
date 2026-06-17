const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/test/hackathon-module/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Serve OpenAPI spec
const path = require('path');
app.get('/test/hackathon-module/openapi.json', (req, res) => {
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
    <p>The following command was used with model qwen3-coder-30b-a3b-instruct to create this module:</p>
    <p>#new create a new workspace for a module that should be part of a larger service-based app. 
    The conventions for the app are stored in: https://github.com/noLXXIII/VibeCodedAdministration/blob/main/docs/TEAM-CONVENTIONS.md

    The module should only show the picture from https://app.tech-riders.de/p/2364/photo

    And say "I was able to create a module"</p>

    <p>Code changes until it run with the app: <br>

    Added: 1003 lines
    Deleted: 19 lines
    Total changed: 1022 lines</p>
  </body>
</html>`);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
