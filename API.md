# Hackathon Module API

Endpoints:

- `GET /health` - Health check

  Response: 200

  ```json
  { "status": "ok" }
  ```

- `GET /test/hackathon-module` - Returns a simple HTML page that shows the requested photo and a confirmation message.

  Response: 200 (text/html)

Notes: This service intentionally serves a tiny HTML payload (no frontend app). It follows the team's conventions by exposing `/health` and including a `docker-compose.yml` with Traefik labels.
