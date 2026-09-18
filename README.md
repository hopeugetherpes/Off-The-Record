# Off The Record

Off The Record is a static Next.js 16 website for a public-space, offline file-sharing archive. The project has no server-side runtime, database, external API, or required environment variables.

## Local development

Requirements:

- Node.js 24
- pnpm 10

```bash
pnpm install --frozen-lockfile
pnpm dev
```

The development server runs at `http://localhost:3000`.

## Validate and build

```bash
pnpm typecheck
pnpm build
```

The production build is exported as static files in `out/`.

## Automatic Vercel deployment

1. Import the repository into Vercel from a supported Git provider.
2. Keep the repository root as the project root.
3. Leave the detected Next.js build settings unchanged.
4. Deploy. No environment variables are required.

The committed `vercel.json` selects the Next.js framework preset. Vercel detects pnpm from `pnpm-lock.yaml`, runs the `build` script, and serves the static export. Once Git integration is enabled, pushes to the production branch deploy automatically and other branches receive preview deployments.

## License

CC0 1.0 Universal — Public Domain.
