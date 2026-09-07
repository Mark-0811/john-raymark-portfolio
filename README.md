# John Raymark LLavanes — Portfolio

Professional portfolio built with Next.js and packaged with the HRIS and ERP projects in one Docker Compose stack.

## Run the complete stack

The default project paths match the local workspace layout. If the HRIS or ERP folders move, copy `.env.example` to `.env` and update the paths.

```bash
docker compose up --build -d
```

- Portfolio: http://localhost:3000
- HRIS Project: http://localhost:5001
- ERP Project: http://localhost:8000

Stop the stack with `docker compose down`. Add `-v` only when you intentionally want to delete the PostgreSQL and upload volumes.

## Portfolio only

```bash
docker compose up --build -d portfolio
```

The contact form creates a pre-addressed message to `llavanesjohnraymark@gmail.com` in the visitor's configured email application, so the portfolio never stores mail credentials.
