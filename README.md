# View360 Experience

Nuxt 3 + Vue + TypeScript + Tailwind website using Photo Sphere Viewer for a 360 place experience. The theme is a small heritage ridge walk with multiple scenes and marker hotspots.

## Architecture

- `pages/` and `components/`: client experience shell and Photo Sphere Viewer integration.
- `server/api/`: Nuxt server API endpoints.
- `server/services/catalogService.ts`: catalog microservice boundary for tour metadata.
- `server/services/mediaService.ts`: media microservice boundary for future MinIO object URLs.
- `server/data/places.ts`: temporary in-project data until MariaDB is connected.
- `docker-compose.yml`: application, MinIO, and MariaDB services.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Run with Docker

```bash
docker compose up --build
```

- Web: `http://localhost:3000`
- MinIO console: `http://localhost:9001`
- MariaDB: `localhost:3306`

## References

- Photo Sphere Viewer: https://photo-sphere-viewer.js.org/
- Nuxt Tailwind module: https://nuxt.com/modules/tailwindcss
# View360v1
