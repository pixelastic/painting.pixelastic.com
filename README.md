# painting.pixelastic.com

Blog about miniature painting, built with Hugo.

## Prerequisites

- Go (version defined in `.go-version`)
- Node.js (version defined in `.nvmrc`)

## Setup

Install dependencies:

```bash
yarn run install-deps
```

This installs Hugo and all yarn dependencies.

## Development

Run local server:

```bash
yarn run serve
```

Site available at `http://localhost:1313/`

Build for production:

```bash
yarn run build:prod
```

Output in `./public/`
