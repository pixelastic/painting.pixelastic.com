# painting.pixelastic.com

Blog about miniature painting, built with Hugo.

## Prerequisites

- Go 1.24+ ([install instructions](https://go.dev/doc/install))

## Setup

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd painting.pixelastic.com-hugo
make install
```

This will install Hugo at the version specified in `go.mod`.

## Development

### Run local development server

```bash
make serve
```

The site will be available at `http://localhost:1313/`

### Build for production

```bash
make build
```

The built site will be in the `./public/` directory.

### Clean build artifacts

```bash
make clean
```

## Project Structure

```
.
├── content/          # Blog posts and pages
├── themes/           # Hugo theme
├── public/           # Built site (generated)
├── hugo.toml         # Hugo configuration
├── go.mod            # Go dependencies (Hugo version)
├── tools.go          # Go tools declaration
└── Makefile          # Build commands
```

## Available Commands

- `make install` - Install all dependencies (Hugo)
- `make build` - Build the site for production
- `make serve` - Run local development server
- `make clean` - Clean build artifacts
- `make help` - Show available commands
